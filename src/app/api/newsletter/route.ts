import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { resend } from '@/lib/resend';
import { render } from '@react-email/render';
import NewsletterConfirmationEmail from '@/emails/NewsletterConfirmationEmail';
import React from 'react';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale = 'en' } = body;

    console.log('📧 Newsletter subscription received:', { email, locale });

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await (supabaseServer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('newsletter_subscribers') as any)
      .select('id, status')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.status === 'active') {
        return NextResponse.json(
          { error: 'already_subscribed' },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        const { data, error } = await (supabaseServer
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .from('newsletter_subscribers') as any)
          .update({ status: 'active', unsubscribed_at: null })
          .eq('email', email)
          .select();

        if (error) {
          console.error('Supabase error:', error);
          return NextResponse.json(
            { error: 'Failed to reactivate subscription' },
            { status: 500 }
          );
        }

        console.log('✅ Subscription reactivated');

        // Send confirmation email for reactivated subscription
        try {
          console.log('📧 Sending reactivation confirmation email...');
          const emailHtml = await render(
            React.createElement(NewsletterConfirmationEmail, { email, locale })
          );

          await resend.emails.send({
            from: 'MyPeterinarian <noreply@mypeterinarian.com>',
            to: email,
            subject: locale === 'en'
              ? 'Welcome Back to MyPeterinarian Newsletter!'
              : 'Velkommen Tilbage til MyPeterinarian Nyhedsbrev!',
            html: emailHtml,
          });

          console.log('✅ Reactivation email sent');
        } catch (emailError) {
          console.error('❌ Failed to send reactivation email:', emailError);
        }

        return NextResponse.json(
          { success: true, data, emailSent: true },
          { status: 200 }
        );
      }
    }

    // Insert new subscription
    const { data, error } = await (supabaseServer
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('newsletter_subscribers') as any)
      .insert([
        {
          email,
          locale,
          status: 'active'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    console.log('✅ Newsletter subscription saved to database');

    // Send confirmation email
    try {
      console.log('📧 Sending newsletter confirmation email...');
      console.log('Resend API Key present:', !!process.env.RESEND_API_KEY);

      const emailHtml = await render(
        React.createElement(NewsletterConfirmationEmail, { email, locale })
      );

      console.log('✅ Email template rendered');

      const emailResult = await resend.emails.send({
        from: 'MyPeterinarian <noreply@mypeterinarian.com>',
        to: email,
        subject: locale === 'en'
          ? 'Welcome to MyPeterinarian Newsletter!'
          : 'Velkommen til MyPeterinarian Nyhedsbrev!',
        html: emailHtml,
      });

      console.log('✅ Newsletter confirmation email sent:', emailResult);
    } catch (emailError) {
      console.error('❌ Failed to send newsletter confirmation:', emailError);
      console.error('Email error type:', emailError?.constructor?.name);
      console.error('Email error message:', emailError instanceof Error ? emailError.message : 'Unknown email error');
      
      return NextResponse.json({ 
        success: true, 
        data,
        warning: 'Subscribed successfully but confirmation email failed to send',
        emailError: emailError instanceof Error ? emailError.message : 'Unknown error'
      }, { status: 200 });
    }

    return NextResponse.json(
      { success: true, data, emailSent: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
