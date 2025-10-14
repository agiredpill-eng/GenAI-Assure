import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DownloadData {
  name: string;
  email: string;
  location: string;
  company?: string;
  purpose: string;
  downloadedAt: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const downloadData: DownloadData = await req.json();

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891B2 0%, #14B8A6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #0891B2; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Framework Download</h1>
            </div>
            <div class="content">
              <p>Someone has downloaded the GenAI Assure Framework. Here are their details:</p>
              
              <div class="info-row">
                <span class="label">Name:</span> ${downloadData.name}
              </div>
              
              <div class="info-row">
                <span class="label">Email:</span> ${downloadData.email}
              </div>
              
              <div class="info-row">
                <span class="label">Location:</span> ${downloadData.location}
              </div>
              
              ${downloadData.company ? `
              <div class="info-row">
                <span class="label">Company:</span> ${downloadData.company}
              </div>
              ` : ''}
              
              <div class="info-row">
                <span class="label">Purpose:</span> ${downloadData.purpose}
              </div>
              
              <div class="info-row">
                <span class="label">Downloaded At:</span> ${new Date(downloadData.downloadedAt).toLocaleString('en-GB', { 
                  dateStyle: 'full', 
                  timeStyle: 'long',
                  timeZone: 'Europe/London'
                })}
              </div>
            </div>
            <div class="footer">
              <p>This notification was sent from your ELSA AI website.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'ELSA AI <notifications@elsaai.co.uk>',
        to: ['theelsaaiuk@gmail.com'],
        subject: `New Framework Download: ${downloadData.name}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: errorText }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, messageId: resendData.id }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending download notification:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});