import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AssessmentData {
  fullName: string;
  workEmail: string;
  company: string;
  roleTitle: string;
  companySize: string;
  phone: string;
  primaryUseCases: string[];
  useCaseOther: string;
  topUseCaseOwner: string;
  businessCriticality: string;
  adoptionStatus: string;
  useCaseDescription: string;
  decisionImpact: string;
  outputVisibility: string;
  discoveryConfidence: string;
  incidents: string[];
  vendorLocations: string;
  dataResidency: string;
  transferMechanism: string;
  retention: string;
  dataTypes: string[];
  lawfulBasis: string[];
  dpiaStatus: string;
  dpiaReference: string;
  ropaStatus: string;
  controlsInPlace: string[];
  activityLogging: string;
  transparencyEvidence: string[];
  humanReview: string;
  runbooksRedress: string;
  complianceDrivers: string[];
  driverOther: string;
  urgency: string;
  decisionSpeed: string;
  biggestConcerns: string;
  consent: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: AssessmentData = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from('emergency_assessments')
      .insert({
        full_name: formData.fullName,
        work_email: formData.workEmail,
        company: formData.company,
        role_title: formData.roleTitle,
        company_size: formData.companySize,
        phone: formData.phone || '',
        primary_use_cases: formData.primaryUseCases,
        use_case_other: formData.useCaseOther || '',
        top_use_case_owner: formData.topUseCaseOwner,
        business_criticality: formData.businessCriticality,
        adoption_status: formData.adoptionStatus,
        use_case_description: formData.useCaseDescription,
        decision_impact: formData.decisionImpact,
        output_visibility: formData.outputVisibility,
        discovery_confidence: formData.discoveryConfidence,
        incidents: formData.incidents,
        vendor_locations: formData.vendorLocations,
        data_residency: formData.dataResidency,
        transfer_mechanism: formData.transferMechanism,
        retention: formData.retention || '',
        data_types: formData.dataTypes,
        lawful_basis: formData.lawfulBasis,
        dpia_status: formData.dpiaStatus,
        dpia_reference: formData.dpiaReference || '',
        ropa_status: formData.ropaStatus,
        controls_in_place: formData.controlsInPlace,
        activity_logging: formData.activityLogging,
        transparency_evidence: formData.transparencyEvidence,
        human_review: formData.humanReview,
        runbooks_redress: formData.runbooksRedress,
        compliance_drivers: formData.complianceDrivers,
        driver_other: formData.driverOther || '',
        urgency: formData.urgency,
        decision_speed: formData.decisionSpeed || '',
        biggest_concerns: formData.biggestConcerns,
        consent_agreed: formData.consent,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save assessment' }),
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
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0f766e; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f0fdfa; padding: 20px; }
    .section { background-color: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #e5e7eb; }
    .section-title { font-size: 18px; font-weight: bold; color: #0f766e; margin-bottom: 10px; border-bottom: 2px solid #0f766e; padding-bottom: 5px; }
    .field { margin-bottom: 10px; }
    .label { font-weight: bold; color: #0f766e; }
    .list { margin-left: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Emergency Risk Assessment Submission</h2>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field"><span class="label">Name:</span> ${formData.fullName}</div>
        <div class="field"><span class="label">Email:</span> <a href="mailto:${formData.workEmail}">${formData.workEmail}</a></div>
        <div class="field"><span class="label">Company:</span> ${formData.company}</div>
        <div class="field"><span class="label">Role/Title:</span> ${formData.roleTitle}</div>
        <div class="field"><span class="label">Company Size:</span> ${formData.companySize}</div>
        ${formData.phone ? `<div class="field"><span class="label">Phone:</span> ${formData.phone}</div>` : ''}
      </div>

      <div class="section">
        <div class="section-title">Use Case</div>
        <div class="field">
          <span class="label">Primary AI Use Cases:</span>
          <ul class="list">${formData.primaryUseCases.map(uc => `<li>${uc}</li>`).join('')}</ul>
        </div>
        ${formData.useCaseOther ? `<div class="field"><span class="label">Other:</span> ${formData.useCaseOther}</div>` : ''}
        <div class="field"><span class="label">Top Use Case Owner:</span> ${formData.topUseCaseOwner}</div>
        <div class="field"><span class="label">Business Criticality:</span> ${formData.businessCriticality}</div>
        <div class="field"><span class="label">Adoption Status:</span> ${formData.adoptionStatus}</div>
        <div class="field"><span class="label">Description:</span><br/>${formData.useCaseDescription}</div>
      </div>

      <div class="section">
        <div class="section-title">Decision Impact & Output</div>
        <div class="field"><span class="label">Decision Impact:</span> ${formData.decisionImpact}</div>
        <div class="field"><span class="label">Output Visibility:</span> ${formData.outputVisibility}</div>
      </div>

      <div class="section">
        <div class="section-title">Discovery & Incidents</div>
        <div class="field"><span class="label">Discovery Confidence:</span> ${formData.discoveryConfidence}</div>
        ${formData.incidents.length > 0 ? `<div class="field">
          <span class="label">Incidents (past 12 months):</span>
          <ul class="list">${formData.incidents.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>` : ''}
      </div>

      <div class="section">
        <div class="section-title">Vendors & Data Flows</div>
        <div class="field"><span class="label">Vendor Locations:</span> ${formData.vendorLocations}</div>
        <div class="field"><span class="label">Data Residency:</span> ${formData.dataResidency}</div>
        <div class="field"><span class="label">Transfer Mechanism:</span> ${formData.transferMechanism}</div>
        ${formData.retention ? `<div class="field"><span class="label">Retention:</span> ${formData.retention}</div>` : ''}
      </div>

      <div class="section">
        <div class="section-title">Privacy & Records</div>
        ${formData.dataTypes.length > 0 ? `<div class="field">
          <span class="label">Data Types:</span>
          <ul class="list">${formData.dataTypes.map(dt => `<li>${dt}</li>`).join('')}</ul>
        </div>` : ''}
        ${formData.lawfulBasis.length > 0 ? `<div class="field">
          <span class="label">Lawful Basis:</span>
          <ul class="list">${formData.lawfulBasis.map(lb => `<li>${lb}</li>`).join('')}</ul>
        </div>` : ''}
        <div class="field"><span class="label">DPIA Status:</span> ${formData.dpiaStatus}</div>
        ${formData.dpiaReference ? `<div class="field"><span class="label">DPIA Reference:</span> ${formData.dpiaReference}</div>` : ''}
        <div class="field"><span class="label">RoPA Status:</span> ${formData.ropaStatus}</div>
      </div>

      <div class="section">
        <div class="section-title">Controls & Monitoring</div>
        ${formData.controlsInPlace.length > 0 ? `<div class="field">
          <span class="label">Controls in Place:</span>
          <ul class="list">${formData.controlsInPlace.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>` : ''}
        <div class="field"><span class="label">Activity Logging:</span> ${formData.activityLogging}</div>
        ${formData.transparencyEvidence.length > 0 ? `<div class="field">
          <span class="label">Transparency & Evidence:</span>
          <ul class="list">${formData.transparencyEvidence.map(te => `<li>${te}</li>`).join('')}</ul>
        </div>` : ''}
      </div>

      <div class="section">
        <div class="section-title">Human Oversight & Response</div>
        <div class="field"><span class="label">Human Review:</span> ${formData.humanReview}</div>
        <div class="field"><span class="label">Runbooks & Redress:</span> ${formData.runbooksRedress}</div>
      </div>

      <div class="section">
        <div class="section-title">Drivers & Priorities</div>
        <div class="field">
          <span class="label">Compliance Drivers:</span>
          <ul class="list">${formData.complianceDrivers.map(cd => `<li>${cd}</li>`).join('')}</ul>
        </div>
        ${formData.driverOther ? `<div class="field"><span class="label">Other Driver:</span> ${formData.driverOther}</div>` : ''}
        <div class="field"><span class="label">Urgency:</span> ${formData.urgency}</div>
        ${formData.decisionSpeed ? `<div class="field"><span class="label">Decision Speed:</span> ${formData.decisionSpeed}</div>` : ''}
        <div class="field"><span class="label">Biggest Concerns:</span><br/>${formData.biggestConcerns}</div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const emailText = `
New Emergency Risk Assessment Submission

CONTACT INFORMATION
-------------------
Name: ${formData.fullName}
Email: ${formData.workEmail}
Company: ${formData.company}
Role/Title: ${formData.roleTitle}
Company Size: ${formData.companySize}
Phone: ${formData.phone || 'N/A'}

USE CASE
--------
Primary AI Use Cases: ${formData.primaryUseCases.join(', ')}
${formData.useCaseOther ? `Other: ${formData.useCaseOther}` : ''}
Top Use Case Owner: ${formData.topUseCaseOwner}
Business Criticality: ${formData.businessCriticality}
Adoption Status: ${formData.adoptionStatus}
Description: ${formData.useCaseDescription}

DECISION IMPACT & OUTPUT
------------------------
Decision Impact: ${formData.decisionImpact}
Output Visibility: ${formData.outputVisibility}

DISCOVERY & INCIDENTS
---------------------
Discovery Confidence: ${formData.discoveryConfidence}
Incidents (past 12 months): ${formData.incidents.join(', ') || 'None'}

VENDORS & DATA FLOWS
--------------------
Vendor Locations: ${formData.vendorLocations}
Data Residency: ${formData.dataResidency}
Transfer Mechanism: ${formData.transferMechanism}
Retention: ${formData.retention || 'N/A'}

PRIVACY & RECORDS
-----------------
Data Types: ${formData.dataTypes.join(', ') || 'None'}
Lawful Basis: ${formData.lawfulBasis.join(', ') || 'None'}
DPIA Status: ${formData.dpiaStatus}
DPIA Reference: ${formData.dpiaReference || 'N/A'}
RoPA Status: ${formData.ropaStatus}

CONTROLS & MONITORING
---------------------
Controls in Place: ${formData.controlsInPlace.join(', ') || 'None'}
Activity Logging: ${formData.activityLogging}
Transparency & Evidence: ${formData.transparencyEvidence.join(', ') || 'None'}

HUMAN OVERSIGHT & RESPONSE
--------------------------
Human Review: ${formData.humanReview}
Runbooks & Redress: ${formData.runbooksRedress}

DRIVERS & PRIORITIES
--------------------
Compliance Drivers: ${formData.complianceDrivers.join(', ')}
${formData.driverOther ? `Other Driver: ${formData.driverOther}` : ''}
Urgency: ${formData.urgency}
Decision Speed: ${formData.decisionSpeed || 'N/A'}

Biggest Concerns:
${formData.biggestConcerns}
    `;

    try {
      const emailPayload = {
        Messages: [{
          From: {
            Email: "noreply@elsaai.co.uk",
            Name: "ELSA AI Emergency Assessment"
          },
          To: [{
            Email: "theelsaaiuk@gmail.com",
            Name: "ELSA AI Team"
          }],
          Subject: `Emergency Risk Assessment: ${formData.company} - ${formData.fullName}`,
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
      JSON.stringify({ success: true, message: 'Assessment submitted successfully' }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing assessment:', error);
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