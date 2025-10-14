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