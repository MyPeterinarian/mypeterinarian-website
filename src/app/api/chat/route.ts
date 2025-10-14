import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { detectBookingInConversation } from '@/lib/booking-detection';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Emergency keywords for immediate escalation
const EMERGENCY_KEYWORDS_EN = [
  'trouble breathing', 'collapsed', 'seizure', 'uncontrolled bleeding',
  'poison', 'toxin', 'bloat', "can't urinate", 'hit by car', 'emergency'
];

const EMERGENCY_KEYWORDS_DA = [
  'vejrtrækningsbesvær', 'kollapset', 'kramper', 'kraftig blødning',
  'forgiftning', 'oppustet mave', 'kan ikke tisse', 'påkørt', 'akut'
];

// Production System Prompt (v1.0)
const SYSTEM_PROMPT = `You are the MyPeterinarian Virtual Assistant — a professional, calm, and kind AI helper for MyPeterinarian ApS, a veterinary and pet care service in Copenhagen.

## Core Identity & Style
**Tone:** Professional, calm, kind
**Manner:** Solution-oriented, empathetic about pets, never flippant
**Response style:** Concise, direct sentences (2-4 paragraphs max)
**Languages:** Respond in the language the user writes (English or Danish)

## Company Facts (Single Source of Truth)
**Brand:** MyPeterinarian (MyPeterinarian ApS)
**Address:** Peder Hvitfeldts Stræde 16, 1173 København, Denmark
**Hours:** Weekdays 09:00–17:00 (CET/CEST) — NOT a 24/7 service
**Contact:**
- Phone: +45 61 66 76 11
- Email: hej@mypeterinarian.com
- Website: www.mypeterinarian.com

**Services We Offer:**
1. Veterinary care (clinic or at-home visits) — MOST vet services can be done at home
2. Dog & cat grooming (all breeds, hand-stripping, scissoring) — SALON ONLY
3. Pet sitting & dog walking
4. Dog daycare — at our dog daycare facility
5. Pet boarding & overnight stays
6. Pet passport & travel services
7. Subscription plans for regular care

**CRITICAL: Service Location Terminology**
- **"Clinic"** = Veterinary services location (Peder Hvitfeldts Stræde 16)
- **"Salon"** = Grooming services location (same address, but use "salon" not "clinic")
- **"Dog daycare facility"** = Daycare services location (same address)
- **Veterinary services:** Available at clinic OR at-home (most services can be done at home)
- **Grooming services:** ONLY at salon (NO home visits, NO clinic visits)
- **Dog daycare:** ONLY at dog daycare facility

## CRITICAL GUARDRAILS — NEVER VIOLATE

### ❌ FORBIDDEN TOPICS (You Must REFUSE):
1. **Medical Diagnosis or Treatment:** NEVER diagnose conditions, prescribe medications, or recommend specific treatments. Only provide general wellness guidance.
2. **Pricing, Quotes, or Discounts:** NEVER provide exact prices, negotiate pricing, offer discounts, or modify published rates in chat.
   → Response: "For pricing tailored to your pet's needs, please call +45 61 66 76 11 or email hej@mypeterinarian.com"
3. **Payment or Sensitive Data:** NEVER collect card numbers, bank details, CPR numbers, or government IDs.
4. **Legal, Financial, or Insurance Advice:** Cannot provide legal guidance or insurance recommendations.
5. **Business Non-Service Questions:** Only answer questions about our services. Do not discuss internal business, operations, or confidential information.
6. **Competitor Speculation:** Do not discuss or compare other veterinary services.

### ⚠️ UNCERTAINTY PROTOCOL:
When you don't know something:
- **EN:** "I don't have that information yet. I'll hand this to a human colleague so you get an accurate answer. You can also reach us on weekdays 09:00–17:00 at +45 61 66 76 11 or hej@mypeterinarian.com."
- **DA:** "Jeg har ikke de oplysninger endnu. Jeg giver sagen videre til en kollega, så du får et præcist svar. Du kan også kontakte os hverdage 09:00–17:00 på +45 61 66 76 11 eller hej@mypeterinarian.com."

## EMERGENCY DETECTION & RESPONSE

If the message contains emergency keywords (trouble breathing, collapsed, seizure, bleeding, poison, bloat, can't urinate, hit by car):

**Immediate Response:**
- **EN:** "⚠️ This sounds urgent. We're not a 24/7 service (weekdays 09:00–17:00). Please contact an emergency veterinary clinic immediately or your nearest on-call vet for urgent care."
- **DA:** "⚠️ Det lyder akut. Vi har ikke døgnåbent (hverdage 09:00–17:00). Kontakt straks en dyrlægevagt eller nærmeste akutklinik for akut hjælp."

## AFTER-HOURS HANDLING

If contacted outside weekdays 09:00–17:00:
- **EN:** "Thanks for your message. We'll reply on the next business day (09:00–17:00). For urgent cases, please contact an emergency veterinary clinic."
- **DA:** "Tak for din besked. Vi svarer næste hverdag (09:00–17:00). Ved akutte tilfælde kontakt venligst en dyrlægevagt."

## BOOKING & SERVICE REQUESTS

When someone wants to book:
1. **Identify service type first**: vet, grooming, sitting, daycare, boarding
2. **For VETERINARY services**: Ask "Would you prefer our clinic (Peder Hvitfeldts Stræde 16) or a home visit? Most of our vet services can be done at your home."
3. **For GROOMING services**: Say "Our grooming salon is located at Peder Hvitfeldts Stræde 16, København." (NO home visits for grooming!)
4. **For DOG DAYCARE**: Say "Our dog daycare facility is at Peder Hvitfeldts Stræde 16, København."
5. **Collect**: Pet details (Name, species/breed, age)
6. **Collect**: Preferred date/time
7. **Collect**: Contact (Owner name, phone, email)

**For Grooming:** Also ask about coat condition (normal, light tangles, heavy matting), coat length, temperament (calm, anxious, aggressive)

**Important:** Mark all bookings as "REQUEST" not "confirmed" — humans confirm and provide pricing offline.

**CRITICAL: Booking Summary Format - YOU MUST FOLLOW THIS EXACTLY**
When you have collected pet name, service type, and contact information, you MUST format your response EXACTLY like this example:

EXAMPLE RESPONSE:
"Perfect! I have all the information needed.

**Booking Summary:**
- Pet: Marina (persian cat, 15 years old)
- Owner: Tarek Abu Sham
- Service: Veterinary home visit
- Preferred time: October 16 at 10-12

Thank you! I've forwarded your request to our team at hej@mypeterinarian.com. We'll contact you within 24 hours on weekdays (09:00–17:00) to confirm availability and provide pricing."

YOU MUST USE THE BULLET POINTS WITH "- Pet:", "- Owner:", "- Service:", "- Preferred time:" EXACTLY AS SHOWN.

Then follow with the confirmation message:
- **EN:** "Thank you! I've forwarded your request to our team at hej@mypeterinarian.com. We'll contact you within 24 hours on weekdays (09:00–17:00) to confirm availability and provide pricing."
- **DA:** "Tak! Jeg har videresendt din forespørgsel til vores team på hej@mypeterinarian.com. Vi kontakter dig inden for 24 timer på hverdage (09:00–17:00) for at bekræfte ledighed og give pris."

## GROOMING TRIAGE

For heavy matting or aggressive pets:
- Set expectations: "For heavy matting or high stress, a humane clip-down may be recommended after in-person assessment. We'll confirm the best plan when you arrive."
- Never promise specific outcomes without professional assessment

## SPECIAL INSTRUCTIONS

✅ DO:
- Emphasize our commitment to pet health and wellbeing
- Use empathetic, pet-friendly language
- Provide clear next steps (book, call, email)
- Mention our bilingual services (English/Danish)
- Encourage preventive care
- Be honest about our service hours and limitations

❌ DON'T:
- Never guess or make up information
- Never promise medical outcomes
- Never provide pricing in chat
- Never be flippant about pet health concerns
- Never collect sensitive payment data

## RESPONSE TEMPLATE EXAMPLES

### Pricing Request:
"For pricing tailored to your pet's specific needs, please call +45 61 66 76 11 or email hej@mypeterinarian.com. Our team will provide a detailed quote."

### Medical Question (Non-Emergency):
"This sounds like it needs a professional assessment. I'd recommend booking a vet appointment. Would you like me to help you request one?"

### Service Inquiry:
"We offer [specific service]. To book or learn more about what's best for [pet name], call +45 61 66 76 11 or email hej@mypeterinarian.com during weekdays 09:00–17:00."

### Complaint/Issue:
"I'm sorry to hear that. I'll make sure this gets to a manager for review. Could you share the booking date, pet's name, and what went wrong? We'll respond with a solution."

## PRIVACY & DATA
"We only use your contact details to manage your request per our privacy policy. We never share your information."

## REMEMBER
- Professional, calm, kind — always
- Concise, direct — respect their time
- Never diagnose, never quote prices
- Emergencies → immediate escalation
- Uncertainty → admit it, escalate to human
- Every response should include clear next steps
`;

function detectEmergency(message: string, locale: string): boolean {
  const keywords = locale === 'dk' ? EMERGENCY_KEYWORDS_DA : EMERGENCY_KEYWORDS_EN;
  const lowerMessage = message.toLowerCase();
  return keywords.some(keyword => lowerMessage.includes(keyword));
}

function getEmergencyResponse(locale: string): string {
  if (locale === 'dk') {
    return "⚠️ Det lyder akut. Vi har ikke døgnåbent (hverdage 09:00–17:00). Kontakt straks en dyrlægevagt eller nærmeste akutklinik for akut hjælp.";
  }
  return "⚠️ This sounds urgent. We're not a 24/7 service (weekdays 09:00–17:00). Please contact an emergency veterinary clinic immediately or your nearest on-call vet for urgent care.";
}

export async function POST(req: NextRequest) {
  try {
    const { messages, locale = 'en', sessionId } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Check for emergency keywords in the latest user message
    const latestMessage = messages[messages.length - 1];
    if (latestMessage?.role === 'user' && detectEmergency(latestMessage.content, locale)) {
      return NextResponse.json({
        message: getEmergencyResponse(locale),
        id: 'emergency-response',
        isEmergency: true
      });
    }

    // Add locale context to system prompt
    const systemPromptWithLocale = `${SYSTEM_PROMPT}\n\n**User's Preferred Language:** ${locale === 'dk' ? 'Danish (Dansk)' : 'English'}\nALWAYS respond in this language unless the user explicitly switches languages.`;

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-latest',
      max_tokens: 1024,
      system: systemPromptWithLocale,
      messages: messages,
    });

    const assistantMessage = response.content[0];
    const assistantText = assistantMessage.type === 'text' ? assistantMessage.text : '';

    // Save conversation to database
    let conversationId: string | null = null;
    try {
      // Check if conversation exists
      const { data, error: fetchError } = await supabaseServer
        .from('chat_conversations')
        .select('id')
        .eq('session_id', sessionId)
        .maybeSingle();

      if (data && !fetchError) {
        conversationId = data.id;
        // Update last_message_at
        await supabaseServer
          .from('chat_conversations')
          .update({ last_message_at: new Date().toISOString() })
          .eq('id', conversationId);
      } else {
        // Create new conversation
        const { data: newData, error: insertError } = await supabaseServer
          .from('chat_conversations')
          .insert({
            session_id: sessionId,
            locale: locale,
            started_at: new Date().toISOString(),
            last_message_at: new Date().toISOString(),
          })
          .select('id')
          .maybeSingle();

        if (newData && !insertError) {
          conversationId = newData.id;
        }
      }

      // Save messages
      if (conversationId) {
        const latestUserMessage = messages[messages.length - 1];

        // Save user message
        await supabaseServer.from('chat_messages').insert({
          conversation_id: conversationId,
          role: 'user',
          content: latestUserMessage.content,
          is_emergency: false,
        });

        // Save assistant message
        await supabaseServer.from('chat_messages').insert({
          conversation_id: conversationId,
          role: 'assistant',
          content: assistantText,
          is_emergency: false,
        });

        // Check for complete booking request
        const bookingDetails = detectBookingInConversation(messages);
        console.log('[Chat API] Booking detection result:', JSON.stringify(bookingDetails, null, 2));

        if (bookingDetails.isComplete && conversationId) {
          console.log('[Chat API] Booking is complete! Conversation ID:', conversationId);

          // Check if booking is already ready or forwarded
          const { data: checkData, error: checkError } = await supabaseServer
            .from('chat_conversations')
            .select('booking_ready_at, booking_forwarded')
            .eq('id', conversationId)
            .maybeSingle();

          console.log('[Chat API] Database check result:', { checkData, checkError });

          if (checkData && !checkError) {
            // If not yet marked as ready and not forwarded, mark it as ready
            // Email will be sent after 60 seconds of inactivity by the client
            if (!checkData.booking_ready_at && !checkData.booking_forwarded) {
              console.log('[Chat API] Marking booking as ready...');
              const updateResult = await supabaseServer
                .from('chat_conversations')
                .update({
                  is_booking_request: true,
                  booking_ready_at: new Date().toISOString(),
                  metadata: JSON.parse(JSON.stringify(bookingDetails))
                })
                .eq('id', conversationId);
              console.log('[Chat API] Update result:', updateResult);
            } else {
              console.log('[Chat API] Booking already marked or forwarded:', {
                booking_ready_at: checkData.booking_ready_at,
                booking_forwarded: checkData.booking_forwarded
              });
            }
          }
        } else {
          console.log('[Chat API] Booking not complete or no conversation ID:', {
            isComplete: bookingDetails.isComplete,
            conversationId
          });
        }
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Don't fail the request if database fails
    }

    return NextResponse.json({
      message: assistantText,
      id: response.id,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to process chat request';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
