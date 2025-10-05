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

  if (!data.fullName?.trim()) errors.push('Full name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  else if (!validateEmail(data.email)) errors.push('Invalid email format');
  if (!data.company?.trim()) errors.push('Company name is required');
  if (!data.role) errors.push('Role is required');
  if (!data.companySize) errors.push('Company size is required');
  if (!Array.isArray(data.aiStack) || data.aiStack.length === 0) errors.push('At least one AI tool must be selected');
  if (!Array.isArray(data.dataTypes) || data.dataTypes.length === 0) errors.push('At least one data type must be selected');
  if (!data.governanceStatus) errors.push('Governance status is required');
  if (!data.dataResidency) errors.push('Data residency is required');
  if (!data.urgency) errors.push('Urgency level is required');
  if (!data.concerns?.trim()) errors.push('Concerns description is required');
  if (!data.consent) errors.push('Consent is required');

  return { valid: errors.length === 0, errors };
}

async function sendNotificationEmail(data: any): Promise<void> {
  const timestamp = new Date().toISOString();
  const emailBody = `
New ELSA AI Free Assessment Request - ${data.company}

═══════════════════════════════════════
CONTACT INFORMATION
═══════════════════════════════════════

Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role}
Company Size: ${data.companySize}
Phone: ${data.phone || 'Not provided'}

═══════════════════════════════════════
AI STACK
═══════════════════════════════════════

${data.aiStack.join('\n')}

═══════════════════════════════════════
DATA TYPES
═══════════════════════════════════════

${data.dataTypes.join('\n')}

═══════════════════════════════════════
CONTROLS IN PLACE
═══════════════════════════════════════

${data.controlsInPlace.length > 0 ? data.controlsInPlace.join('\n') : 'None specified'}

═══════════════════════════════════════
GOVERNANCE & COMPLIANCE
═══════════════════════════════════════

Governance Status: ${data.governanceStatus}
Data Residency: ${data.dataResidency}
Urgency: ${data.urgency}
Decision Speed: ${data.decisionSpeed || 'Not specified'}

═══════════════════════════════════════
BIGGEST CONCERNS
═══════════════════════════════════════

${data.concerns}

═══════════════════════════════════════
SUBMISSION DETAILS
═══════════════════════════════════════

Submitted: ${timestamp}
Consent Given: Yes
  `;

  console.log('='.repeat(60));
  console.log('NEW ASSESSMENT SUBMISSION');
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

    const { error } = await supabase.from('assessment_submissions').insert([
      {
        full_name: data.fullName,
        email: data.email,
        company: data.company,
        role: data.role,
        company_size: data.companySize,
        phone: data.phone,
        ai_stack: data.aiStack,
        data_types: data.dataTypes,
        controls_in_place: data.controlsInPlace,
        governance_status: data.governanceStatus,
        data_residency: data.dataResidency,
        urgency: data.urgency,
        decision_speed: data.decisionSpeed,
        concerns: data.concerns,
        consent: data.consent,
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to submit assessment' }, { status: 500 });
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
