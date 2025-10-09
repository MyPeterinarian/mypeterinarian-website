import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { getResend } from '@/lib/resend';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/ContactFormEmail';
import ContactFormConfirmationEmail from '@/emails/ContactFormConfirmationEmail';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, locale } = body;

    console.log('📧 Contact form submission received:', { name, email, phone, subject, locale });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use locale from request body or default to 'en'
    const emailLocale = locale || 'en';

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
          locale: emailLocale,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to submit contact form', details: error.message },
        { status: 500 }
      );
    }

    console.log('✅ Form data saved to Supabase');

    // Send email notifications
    try {
      console.log('📧 Starting email send process...');
      console.log('Resend API Key present:', !!process.env.RESEND_API_KEY);
      
      // Render email templates to HTML
      console.log('🎨 Rendering email templates...');
      const ownerEmailHtml = await render(
        React.createElement(ContactFormEmail, {
          name,
          email,
          phone,
          subject,
          message,
          locale: emailLocale,
        })
      );

      const customerEmailHtml = await render(
        React.createElement(ContactFormConfirmationEmail, {
          name,
          locale: emailLocale,
        })
      );

      console.log('✅ Email templates rendered');

      // 1. Send notification to business owner
      console.log('📤 Sending email to business owner...');
      const resend = getResend();
      const ownerEmailResult = await resend.emails.send({
        from: 'MyPeterinarian <noreply@mypeterinarian.com>',
        to: 'hej@mypeterinarian.com',
        replyTo: email,
        subject: emailLocale === 'en'
          ? `New Contact Form Submission from ${name}`
          : `Ny Kontaktformular Indsendelse fra ${name}`,
        html: ownerEmailHtml,
      });

      console.log('✅ Business owner email sent:', ownerEmailResult);

      // 2. Send confirmation to customer
      console.log('📤 Sending confirmation to customer...');
      const customerEmailResult = await resend.emails.send({
        from: 'MyPeterinarian <noreply@mypeterinarian.com>',
        to: email,
        subject: emailLocale === 'en'
          ? 'Thank you for contacting MyPeterinarian'
          : 'Tak fordi du kontaktede MyPeterinarian',
        html: customerEmailHtml,
      });

      console.log('✅ Customer confirmation email sent:', customerEmailResult);
      console.log('🎉 All emails sent successfully!');
    } catch (emailError) {
      // Log email error but don't fail the request since data is already saved
      console.error('❌ Failed to send email notifications:', emailError);
      console.error('Email error type:', emailError?.constructor?.name);
      console.error('Email error message:', emailError instanceof Error ? emailError.message : 'Unknown email error');
      console.error('Email error stack:', emailError instanceof Error ? emailError.stack : 'No stack trace');
      
      // Return success with warning about email
      return NextResponse.json(
        { 
          success: true, 
          data,
          warning: 'Form submitted successfully but email notifications failed to send',
          emailError: emailError instanceof Error ? emailError.message : 'Unknown error'
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, data, emailsSent: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    console.error('Full error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
