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
    const { name, email, location, company, purpose, userAgent } = await req.json();

    if (!name || !email || !location || !purpose) {
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
      .from('framework_downloads')
      .insert([{
        name,
        email,
        location,
        company: company || '',
        purpose,
        user_agent: userAgent || '',
      }]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to log download', details: dbError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const mailjetApiKey = Deno.env.get('MAILJET_API_KEY');
    const mailjetSecretKey = Deno.env.get('MAILJET_SECRET_KEY');

    if (mailjetApiKey && mailjetSecretKey) {
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
                Name: 'ELSA AI Framework Downloads',
              },
              To: [
                {
                  Email: 'theelsaaiuk@gmail.com',
                  Name: 'ELSA AI Team',
                },
              ],
              Subject: `Framework Download: ${name}`,
              TextPart: `New framework download:\n\nName: ${name}\nEmail: ${email}\nLocation: ${location}\n${company ? `Company: ${company}\n` : ''}\nPurpose:\n${purpose}`,
              HTMLPart: `
                <h2>New Framework Download</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Location:</strong> ${location}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                <h3>Purpose:</h3>
                <p>${purpose.replace(/\n/g, '<br>')}</p>
              `,
            },
          ],
        }),
      });

      if (!mailjetResponse.ok) {
        const errorData = await mailjetResponse.text();
        console.error('Mailjet error:', errorData);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Download logged successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing download:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});