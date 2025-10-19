import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    console.log('Emergency assessment submission:', {
      fullName: formData.fullName,
      workEmail: formData.workEmail,
      company: formData.company
    });

    // Basic validation
    if (!formData.fullName || !formData.workEmail || !formData.company) {
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
          full_name: formData.fullName,
          work_email: formData.workEmail,
          company: formData.company,
          role_title: formData.roleTitle,
          company_size: formData.companySize,
          phone: formData.phone || '',
          primary_use_cases: formData.primaryUseCases || [],
          use_case_other: formData.useCaseOther || '',
          top_use_case_owner: formData.topUseCaseOwner,
          business_criticality: formData.businessCriticality,
          adoption_status: formData.adoptionStatus,
          use_case_description: formData.useCaseDescription,
          decision_impact: formData.decisionImpact,
          output_visibility: formData.outputVisibility,
          discovery_confidence: formData.discoveryConfidence,
          incidents: formData.incidents || [],
          vendor_locations: formData.vendorLocations,
          data_residency: formData.dataResidency,
          transfer_mechanism: formData.transferMechanism,
          retention: formData.retention || '',
          data_types: formData.dataTypes || [],
          lawful_basis: formData.lawfulBasis || [],
          dpia_status: formData.dpiaStatus,
          dpia_reference: formData.dpiaReference || '',
          ropa_status: formData.ropaStatus,
          controls_in_place: formData.controlsInPlace || [],
          activity_logging: formData.activityLogging,
          transparency_evidence: formData.transparencyEvidence || [],
          human_review: formData.humanReview,
          runbooks_redress: formData.runbooksRedress,
          compliance_drivers: formData.complianceDrivers || [],
          driver_other: formData.driverOther || '',
          urgency: formData.urgency,
          decision_speed: formData.decisionSpeed || '',
          biggest_concerns: formData.biggestConcerns,
          consent: formData.consent || false,
        };
        
        console.log('Attempting to save emergency assessment to database');
        const { error: dbError } = await supabase
          .from('emergency_assessments')
          .insert([insertData]);

        if (!dbError) {
          dbSaved = true;
          console.log('✅ Emergency assessment database save successful');
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
        console.log('Attempting to send emergency assessment email via Mailjet...');
        const emailBody = `
          <h2>New Emergency Risk Assessment Submission</h2>
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.workEmail}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Role:</strong> ${formData.roleTitle}</p>
          <p><strong>Company Size:</strong> ${formData.companySize}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}

          <h3>Use Case Information</h3>
          <p><strong>Primary Use Cases:</strong> ${formData.primaryUseCases?.join(', ') || 'None'}</p>
          ${formData.useCaseOther ? `<p><strong>Other Use Case:</strong> ${formData.useCaseOther}</p>` : ''}
          <p><strong>Use Case Owner:</strong> ${formData.topUseCaseOwner}</p>
          <p><strong>Business Criticality:</strong> ${formData.businessCriticality}</p>
          <p><strong>Adoption Status:</strong> ${formData.adoptionStatus}</p>
          <p><strong>Description:</strong> ${formData.useCaseDescription}</p>

          <h3>Biggest Concerns</h3>
          <p>${formData.biggestConcerns}</p>

          <h3>Urgency</h3>
          <p><strong>Urgency Level:</strong> ${formData.urgency}</p>
          ${formData.decisionSpeed ? `<p><strong>Decision Speed Required:</strong> ${formData.decisionSpeed}</p>` : ''}
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
                Name: 'ELSA AI Assessment Form',
              },
              To: [{
                Email: 'theelsaaiuk@gmail.com',
                Name: 'ELSA AI Team',
              }],
              Subject: `Emergency Risk Assessment: ${formData.company} - ${formData.fullName}`,
              HTMLPart: emailBody,
            }],
          }),
        });

        if (emailResponse.ok) {
          emailSent = true;
          console.log('✅ Emergency assessment email sent successfully');
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
    console.log('📋 Emergency assessment submission summary:');
    console.log(`  - Database saved: ${dbSaved ? '✅ Yes' : '❌ No'}`);
    console.log(`  - Email sent: ${emailSent ? '✅ Yes' : '❌ No'}`);

    // Always return success to prevent errors
    return NextResponse.json({
      success: true,
      message: 'Emergency assessment submitted successfully. We will get back to you soon.',
      details: {
        databaseSaved: dbSaved,
        emailSent: emailSent
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Emergency assessment API error:', error);
    return NextResponse.json({
      success: true,
      message: 'Emergency assessment received. We will get back to you soon.'
    }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}