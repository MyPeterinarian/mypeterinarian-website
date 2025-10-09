import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

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
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
