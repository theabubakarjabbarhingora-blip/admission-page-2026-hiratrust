import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  program: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryData = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.program) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format the email content
    const emailContent = `
New Inquiry from HIRA Institute Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Program Interest: ${data.program}
Message: ${data.message || "No message provided"}

---
This inquiry was submitted via the HIRA Institute landing page.
    `.trim();

    const resendKey = Deno.env.get("RESEND_API_KEY");

    if (resendKey) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "HIRA Institute <info@hirainstitute.org>",
          to: ["info@hirainstitute.org"],
          reply_to: data.email,
          subject: `New Inquiry: ${data.name} - ${data.program}`,
          text: emailContent,
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send email:", await emailResponse.text());
      }
    }

    // Log the inquiry for tracking
    console.log("New inquiry received:", {
      name: data.name,
      email: data.email,
      program: data.program,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ success: true, message: "Inquiry received successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error processing inquiry:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process inquiry" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
