import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { resend } from '@/lib/resend';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ContactFormConfirmationEmail from '@/emails/ContactFormConfirmationEmail';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get locale from headers or default to 'en'
    const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en';

    // Insert into Supabase
    const { data, error } = await (supabaseServer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('contact_submissions') as any)
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
          locale,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to submit contact form', details: error.message },
        { status: 500 }
      );
    }

    // Send email notifications
    try {
      // Render email templates to HTML
      const ownerEmailHtml = await render(
        React.createElement(ContactFormEmail, {
          name,
          email,
          phone,
          subject,
          message,
          locale,
        })
      );

      const customerEmailHtml = await render(
        React.createElement(ContactFormConfirmationEmail, {
          name,
          locale,
        })
      );

      // 1. Send notification to business owner
      await resend.emails.send({
        from: 'MyPeterinarian <noreply@mypeterinarian.com>',
        to: 'hej@mypeterinarian.com',
        replyTo: email,
        subject: locale === 'en' 
          ? `New Contact Form Submission from ${name}`
          : `Ny Kontaktformular Indsendelse fra ${name}`,
        html: ownerEmailHtml,
      });

      // 2. Send confirmation to customer
      await resend.emails.send({
        from: 'MyPeterinarian <noreply@mypeterinarian.com>',
        to: email,
        subject: locale === 'en'
          ? 'Thank you for contacting MyPeterinarian'
          : 'Tak fordi du kontaktede MyPeterinarian',
        html: customerEmailHtml,
      });

      console.log('Contact form emails sent successfully');
    } catch (emailError) {
      // Log email error but don't fail the request since data is already saved
      console.error('Failed to send email notifications:', emailError);
      console.error('Email error details:', emailError instanceof Error ? emailError.message : 'Unknown email error');
      
      // Return success with warning about email
      return NextResponse.json(
        { 
          success: true, 
          data,
          warning: 'Form submitted successfully but email notifications failed to send'
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Full error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
