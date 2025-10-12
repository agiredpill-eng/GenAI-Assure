import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || null,
        message: formData.message,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailBody = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'N/A'}

Message:
${formData.message}

View all submissions in your Supabase dashboard.
    `;

    const emailPayload = {
      personalizations: [{
        to: [{ email: 'theelsaaiuk@gmail.com' }],
        subject: formData.subject ? `Contact Form: ${formData.subject}` : 'New Contact Form Submission',
      }],
      from: { email: 'noreply@elsaai.co.uk', name: 'ELSA AI Contact Form' },
      content: [{
        type: 'text/plain',
        value: emailBody,
      }, {
        type: 'text/html',
        value: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f766e;">New Contact Form Submission</h2>
            <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
              <p><strong>Subject:</strong> ${formData.subject || 'N/A'}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3>Message:</h3>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">View all submissions in your Supabase dashboard.</p>
          </div>
        `,
      }],
    };

    const sendgridApiKey = Deno.env.get('SENDGRID_API_KEY');
    
    if (sendgridApiKey) {
      try {
        const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sendgridApiKey}`,
          },
          body: JSON.stringify(emailPayload),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error('SendGrid API error:', errorData);
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully' }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});