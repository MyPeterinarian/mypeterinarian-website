import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { getResend } from '@/lib/resend';
import { formatBookingEmail } from '@/lib/booking-detection';

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Find conversation by session ID
    const { data: conversation, error: convError } = await supabaseServer
      .from('chat_conversations')
      .select('id, locale, metadata, booking_ready_at, booking_forwarded, last_message_at')
      .eq('session_id', sessionId)
      .maybeSingle();

    if (convError || !conversation) {
      return NextResponse.json({ success: false, message: 'Conversation not found' });
    }

    // Check if booking is ready but not forwarded
    if (!conversation.booking_ready_at || conversation.booking_forwarded) {
      return NextResponse.json({ success: false, message: 'No pending booking' });
    }

    // Check if enough time has passed (60 seconds since booking became ready)
    const bookingReadyTime = new Date(conversation.booking_ready_at).getTime();
    const lastMessageTime = new Date(conversation.last_message_at).getTime();
    const now = Date.now();
    const sixtySecondsInMs = 60 * 1000;

    // Send email only if:
    // 1. At least 60 seconds have passed since booking became ready OR
    // 2. At least 60 seconds have passed since last message
    const timeSinceReady = now - bookingReadyTime;
    const timeSinceLastMessage = now - lastMessageTime;

    if (timeSinceReady < sixtySecondsInMs && timeSinceLastMessage < sixtySecondsInMs) {
      return NextResponse.json({
        success: false,
        message: 'Not enough time has passed',
        waitTime: Math.max(sixtySecondsInMs - timeSinceReady, sixtySecondsInMs - timeSinceLastMessage)
      });
    }

    // Get all messages for the conversation
    const { data: messages, error: messagesError } = await supabaseServer
      .from('chat_messages')
      .select('role, content')
      .eq('conversation_id', conversation.id)
      .order('created_at', { ascending: true });

    if (messagesError || !messages) {
      console.error('Failed to fetch messages:', messagesError);
      return NextResponse.json({ success: false, message: 'Failed to fetch messages' });
    }

    // Get booking details from metadata
    const bookingDetails = conversation.metadata as {
      serviceType?: string;
      petName?: string;
      petSpecies?: string;
      ownerName?: string;
      email?: string;
      phone?: string;
      preferredDate?: string;
      preferredTime?: string;
      location?: string;
    };

    if (!bookingDetails || !bookingDetails.serviceType) {
      return NextResponse.json({ success: false, message: 'Invalid booking data' });
    }

    // Send email
    try {
      const resend = getResend();
      const emailHtml = formatBookingEmail(
        bookingDetails,
        conversation.locale,
        conversation.id,
        messages
      );

      await resend.emails.send({
        from: 'MyPeterinarian Chatbot <chatbot@mypeterinarian.com>',
        to: 'hej@mypeterinarian.com',
        subject: `🐾 New Booking Request - ${bookingDetails.serviceType || 'Service'} for ${bookingDetails.petName || 'Pet'}`,
        html: emailHtml,
      });

      // Mark as forwarded
      await supabaseServer
        .from('chat_conversations')
        .update({
          booking_forwarded: true
        })
        .eq('id', conversation.id);

      return NextResponse.json({
        success: true,
        message: 'Booking email sent successfully'
      });
    } catch (emailError) {
      console.error('Failed to send booking email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Finalize booking error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to finalize booking';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
