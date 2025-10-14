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
    const formData = await req.json();

    if (!formData.fullName || !formData.workEmail || !formData.company) {
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
      .from('emergency_assessments')
      .insert([{
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
      }]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save assessment', details: dbError.message }),
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
          <p><strong>Primary Use Cases:</strong> ${formData.primaryUseCases.join(', ')}</p>
          ${formData.useCaseOther ? `<p><strong>Other Use Case:</strong> ${formData.useCaseOther}</p>` : ''}
          <p><strong>Use Case Owner:</strong> ${formData.topUseCaseOwner}</p>
          <p><strong>Business Criticality:</strong> ${formData.businessCriticality}</p>
          <p><strong>Adoption Status:</strong> ${formData.adoptionStatus}</p>
          <p><strong>Description:</strong> ${formData.useCaseDescription}</p>

          <h3>Decision Impact</h3>
          <p><strong>AI Decision Impact:</strong> ${formData.decisionImpact}</p>
          <p><strong>Output Visibility:</strong> ${formData.outputVisibility}</p>

          <h3>Discovery & Incidents</h3>
          <p><strong>Discovery Confidence:</strong> ${formData.discoveryConfidence}</p>
          ${formData.incidents.length > 0 ? `<p><strong>Incidents:</strong> ${formData.incidents.join(', ')}</p>` : ''}

          <h3>Vendors & Data Flows</h3>
          <p><strong>Vendor Locations:</strong> ${formData.vendorLocations}</p>
          <p><strong>Data Residency:</strong> ${formData.dataResidency}</p>
          <p><strong>Transfer Mechanism:</strong> ${formData.transferMechanism}</p>
          ${formData.retention ? `<p><strong>Retention:</strong> ${formData.retention}</p>` : ''}

          <h3>Privacy & Records</h3>
          ${formData.dataTypes.length > 0 ? `<p><strong>Data Types:</strong> ${formData.dataTypes.join(', ')}</p>` : ''}
          ${formData.lawfulBasis.length > 0 ? `<p><strong>Lawful Basis:</strong> ${formData.lawfulBasis.join(', ')}</p>` : ''}
          <p><strong>DPIA Status:</strong> ${formData.dpiaStatus}</p>
          ${formData.dpiaReference ? `<p><strong>DPIA Reference:</strong> ${formData.dpiaReference}</p>` : ''}
          <p><strong>RoPA Status:</strong> ${formData.ropaStatus}</p>

          <h3>Controls & Monitoring</h3>
          ${formData.controlsInPlace.length > 0 ? `<p><strong>Controls in Place:</strong> ${formData.controlsInPlace.join(', ')}</p>` : ''}
          <p><strong>Activity Logging:</strong> ${formData.activityLogging}</p>
          ${formData.transparencyEvidence.length > 0 ? `<p><strong>Transparency Evidence:</strong> ${formData.transparencyEvidence.join(', ')}</p>` : ''}

          <h3>Human Oversight</h3>
          <p><strong>Human Review:</strong> ${formData.humanReview}</p>
          <p><strong>Runbooks & Redress:</strong> ${formData.runbooksRedress}</p>

          <h3>Drivers & Priorities</h3>
          <p><strong>Compliance Drivers:</strong> ${formData.complianceDrivers.join(', ')}</p>
          ${formData.driverOther ? `<p><strong>Other Driver:</strong> ${formData.driverOther}</p>` : ''}
          <p><strong>Urgency:</strong> ${formData.urgency}</p>
          ${formData.decisionSpeed ? `<p><strong>Decision Speed:</strong> ${formData.decisionSpeed}</p>` : ''}
          <p><strong>Biggest Concerns:</strong> ${formData.biggestConcerns}</p>
        `;

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
                  Name: 'ELSA AI Assessment Form',
                },
                To: [
                  {
                    Email: 'theelsaaiuk@gmail.com',
                    Name: 'ELSA AI Team',
                  },
                ],
                Subject: `Emergency Risk Assessment: ${formData.company} - ${formData.fullName}`,
                HTMLPart: emailBody,
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
      JSON.stringify({ success: true, message: 'Assessment submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing assessment:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});