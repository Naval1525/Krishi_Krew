import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  // Set CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers":
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  };

  // Handle preflight request
  if (request.method === "OPTIONS") {
    return new NextResponse(null, { status: 200, headers: corsHeaders });
  }

  // Handle POST request
  if (request.method === "POST") {
    try {
      const body = await request.json();
      const response = await axios.post(
        "https://fertilizer-prediction-rl0r.onrender.com/predict",
        body
      );
      return new NextResponse(JSON.stringify(response.data), {
        status: 200,
        headers: corsHeaders,
      });
    } catch (error) {
      console.error("Error forwarding request to AI model:", error);
      return new NextResponse(
        JSON.stringify({ error: "Error forwarding request to AI model" }),
        { status: 500, headers: corsHeaders }
      );
    }
  } else {
    // Handle any other HTTP method
    return new NextResponse(`Method ${request.method} Not Allowed`, {
      status: 405,
      headers: {
        ...corsHeaders,
        Allow: "POST",
      },
    });
  }
}
