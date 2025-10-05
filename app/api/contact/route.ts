import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name?.trim()) errors.push('Name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  else if (!validateEmail(data.email)) errors.push('Invalid email format');
  if (!data.message?.trim()) errors.push('Message is required');

  return { valid: errors.length === 0, errors };
}

async function sendNotificationEmail(data: any): Promise<void> {
  const timestamp = new Date().toISOString();
  const emailBody = `
New Contact Form Submission

═══════════════════════════════════════
CONTACT INFORMATION
═══════════════════════════════════════

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject || 'No subject provided'}

═══════════════════════════════════════
MESSAGE
═══════════════════════════════════════

${data.message}

═══════════════════════════════════════
SUBMISSION DETAILS
═══════════════════════════════════════

Submitted: ${timestamp}
  `;

  console.log('='.repeat(60));
  console.log('NEW CONTACT FORM SUBMISSION');
  console.log('='.repeat(60));
  console.log(emailBody);
  console.log('='.repeat(60));
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const validation = validateFormData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: data.name,
        email: data.email,
        subject: data.subject || null,
        message: data.message,
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
    }

    try {
      await sendNotificationEmail(data);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
