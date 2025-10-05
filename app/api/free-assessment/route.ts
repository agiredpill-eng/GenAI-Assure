import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
