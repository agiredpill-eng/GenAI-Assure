import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, subject: subject || '', message }]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission', details: dbError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const mailjetApiKey = Deno.env.get('MAILJET_API_KEY');
    const mailjetSecretKey = Deno.env.get('MAILJET_SECRET_KEY');

    if (mailjetApiKey && mailjetSecretKey) {
      try {
        const mailjetResponse = await fetch('https://api.mailjet.com/v3.1/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${mailjetApiKey}:${mailjetSecretKey}`)}`,
          },
          body: JSON.stringify({
            Messages: [
              {
                From: {
                  Email: 'noreply@elsaai.co.uk',
                  Name: 'ELSA AI Contact Form',
                },
                To: [
                  {
                    Email: 'theelsaaiuk@gmail.com',
                    Name: 'ELSA AI Team',
                  },
                ],
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
              },
            ],
          }),
        });

        if (!mailjetResponse.ok) {
          const errorData = await mailjetResponse.text();
          console.error('Mailjet error:', errorData);
        }
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});