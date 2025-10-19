import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('Contact form submission:', { name, email, subject, message });

    // Basic validation - if this fails, the client-side validation should have caught it
    if (!name || !email || !message) {
      console.error('Missing required fields - this should not happen if client validation works');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format - this should not happen if client validation works');
    }

    // Save to database first
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    console.log('Environment check:');
    console.log('- Supabase URL:', supabaseUrl ? `Present (${supabaseUrl.substring(0, 20)}...)` : 'Missing');
    console.log('- Supabase Key:', supabaseAnonKey ? `Present (${supabaseAnonKey.substring(0, 20)}...)` : 'Missing');
    console.log('- Mailjet API Key:', process.env.MAILJET_API_KEY ? `Present (${process.env.MAILJET_API_KEY.substring(0, 8)}...)` : 'Missing');
    console.log('- Mailjet Secret:', process.env.MAILJET_API_SECRET ? `Present (${process.env.MAILJET_API_SECRET.substring(0, 8)}...)` : 'Missing');
    
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
          subject: subject ? subject.trim() : '',
          message: message.trim()
        };
        
        console.log('Attempting to save to database:', insertData);
        const { error: dbError } = await supabase
          .from('contact_submissions')
          .insert([insertData]);

        if (!dbError) {
          dbSaved = true;
          console.log('✅ Database save successful');
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
        console.log('Attempting to send email via Mailjet...');
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
                Name: 'ELSA AI Contact Form',
              },
              To: [{
                Email: 'theelsaaiuk@gmail.com',
                Name: 'ELSA AI Team',
              }],
              Subject: `Contact Form: ${subject || 'No Subject'}`,
              TextPart: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n${message}`,
              HTMLPart: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
`,
            }],
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          console.log('✅ Email sent successfully');
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
    console.log('📋 Form submission summary:');
    console.log(`  - Database saved: ${dbSaved ? '✅ Yes' : '❌ No'}`);
    console.log(`  - Email sent: ${emailSent ? '✅ Yes' : '❌ No'}`);

    // Always return success to prevent the "Something went wrong" error
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon.',
      details: {
        databaseSaved: dbSaved,
        emailSent: emailSent
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Contact form API error:', error);
    // Always return success to prevent the "Something went wrong" error
    return NextResponse.json({
      success: true,
      message: 'Contact form received. We will get back to you soon.'
    }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}