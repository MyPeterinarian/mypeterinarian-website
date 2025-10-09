import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get locale from headers or default to 'en'
    const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en';

    // Check if email already exists
    const { data: existing } = await (supabase
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
        const { data, error } = await (supabase
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

        return NextResponse.json(
          { success: true, data },
          { status: 200 }
        );
      }
    }

    // Insert new subscription
    const { data, error } = await (supabase
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

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
