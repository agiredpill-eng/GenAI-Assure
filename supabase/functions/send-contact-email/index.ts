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

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0f766e; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f0fdfa; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0f766e; }
    .message-box { background-color: white; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${formData.name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a>
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${formData.subject || 'N/A'}
      </div>
      <div class="message-box">
        <div class="label">Message:</div>
        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${formData.message}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'N/A'}

Message:
${formData.message}
    `;

    try {
      const emailPayload = {
        Messages: [{
          From: {
            Email: "noreply@elsaai.co.uk",
            Name: "ELSA AI Contact Form"
          },
          To: [{
            Email: "theelsaaiuk@gmail.com",
            Name: "ELSA AI Team"
          }],
          Subject: formData.subject ? `Contact Form: ${formData.subject}` : "New Contact Form Submission",
          TextPart: emailText,
          HTMLPart: emailHtml
        }]
      };

      const mailjetApiKey = Deno.env.get('MAILJET_API_KEY');
      const mailjetApiSecret = Deno.env.get('MAILJET_API_SECRET');

      if (mailjetApiKey && mailjetApiSecret) {
        const authString = btoa(`${mailjetApiKey}:${mailjetApiSecret}`);
        
        const emailResponse = await fetch('https://api.mailjet.com/v3.1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
          },
          body: JSON.stringify(emailPayload),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error('Mailjet API error:', emailResponse.status, errorText);
        } else {
          console.log('Email sent successfully via Mailjet');
        }
      } else {
        console.log('Email service not configured - submission saved to database');
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
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