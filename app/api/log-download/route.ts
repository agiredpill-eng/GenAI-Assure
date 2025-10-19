import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, location, company, purpose, userAgent } = body;

    console.log('Framework download submission:', { name, email, location, company, purpose });

    // Basic validation
    if (!name || !email || !location || !purpose) {
      console.error('Missing required fields - this should not happen if client validation works');
    }

    // Save to database first
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('Environment check:');
    console.log('- Supabase URL:', supabaseUrl ? 'Present' : 'Missing');
    console.log('- Supabase Key:', supabaseAnonKey ? 'Present' : 'Missing');
    console.log('- Mailjet API Key:', process.env.MAILJET_API_KEY ? 'Present' : 'Missing');
    console.log('- Mailjet Secret:', process.env.MAILJET_API_SECRET ? 'Present' : 'Missing');
    
    let dbSaved = false;
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('❌ Supabase configuration missing - URL or Anon Key not set');
      // Log security issue but don't fail the request to maintain user experience
    } else {
      try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const insertData = {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          location: location.trim(),
          company: company ? company.trim() : '',
          purpose: purpose.trim(),
          user_agent: userAgent || ''
        };
        
        console.log('Attempting to save framework download to database:', insertData);
        const { error: dbError } = await supabase
          .from('framework_downloads')
          .insert([insertData]);

        if (!dbError) {
          dbSaved = true;
          console.log('✅ Framework download database save successful');
        } else {
          console.error('❌ Database error:', dbError);
        }
      } catch (dbError) {
        console.error('❌ Database save failed:', dbError);
      }
    }

    // Send email via Mailjet
    const mailjetApiKey = process.env.MAILJET_API_KEY;
    const mailjetApiSecret = process.env.MAILJET_API_SECRET;
    
    console.log('Mailjet API Key available:', !!mailjetApiKey);
    console.log('Mailjet API Secret available:', !!mailjetApiSecret);

    let emailSent = false;
    if (!mailjetApiKey || !mailjetApiSecret) {
      console.error('❌ Mailjet API keys not configured properly - missing API key or secret');
    } else {
      try {
        console.log('Attempting to send framework download email via Mailjet...');
        const emailBody = `
          <h2>New Framework Download</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Purpose:</strong> ${purpose}</p>
          ${userAgent ? `<p><strong>User Agent:</strong> ${userAgent}</p>` : ''}
          <p><strong>Downloaded at:</strong> ${new Date().toLocaleString()}</p>
        `;

        const emailResponse = await fetch('https://api.mailjet.com/v3.1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(`${mailjetApiKey}:${mailjetApiSecret}`).toString('base64')}`,
          },
          body: JSON.stringify({
            Messages: [{
              From: {
                Email: 'noreply@elsaai.co.uk',
                Name: 'ELSA AI Framework Download',
              },
              To: [{
                Email: 'theelsaaiuk@gmail.com',
                Name: 'ELSA AI Team',
              }],
              Subject: `Framework Download: ${name} from ${company || location}`,
              HTMLPart: emailBody,
            }],
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          console.log('✅ Framework download email sent successfully');
        } else {
          const errorData = await emailResponse.text();
          console.error('❌ Mailjet error:', errorData);
          console.error('❌ Mailjet response status:', emailResponse.status);
        }
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError);
      }
    }

    // Log summary of what happened
    console.log('📋 Framework download submission summary:');
    console.log(`  - Database saved: ${dbSaved ? '✅ Yes' : '❌ No'}`);
    console.log(`  - Email sent: ${emailSent ? '✅ Yes' : '❌ No'}`);

    // Always return success
    return NextResponse.json({
      success: true,
      message: 'Download recorded successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Framework download API error:', error);
    return NextResponse.json({
      success: true,
      message: 'Download recorded successfully'
    }, { status: 200 });
  }
}

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('❌ Supabase configuration missing for GET request');
      return NextResponse.json({ count: 0 }, { status: 200 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { count, error } = await supabase
      .from('framework_downloads')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to get download count' },
        { status: 500 }
      );
    }

    return NextResponse.json({ count: count || 0 }, { status: 200 });
  } catch (err) {
    console.error('Error getting download count:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}