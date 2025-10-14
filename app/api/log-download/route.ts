import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, location, company, purpose, userAgent } = body;

    if (!name || !email || !location || !purpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Supabase configuration missing');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const ipAddress = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     null;

    const { error } = await supabase
      .from('framework_downloads')
      .insert({
        name,
        email,
        location,
        company: company || '',
        purpose,
        user_agent: userAgent,
        ip_address: ipAddress,
      });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to log download', details: error.message },
        { status: 500 }
      );
    }

    const downloadedAt = new Date().toISOString();

    fetch(
      `${supabaseUrl}/functions/v1/send-download-notification`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name,
          email,
          location,
          company: company || '',
          purpose,
          downloadedAt,
        }),
      }
    ).catch(err => console.error('Email notification error:', err));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error logging download:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase
      .rpc('get_framework_download_count');

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to get download count' },
        { status: 500 }
      );
    }

    return NextResponse.json({ count: data || 0 }, { status: 200 });
  } catch (error) {
    console.error('Error getting download count:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
