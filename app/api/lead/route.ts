import { NextResponse } from "next/server";

export type Lead = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
};

/**
 * In-memory store for demo purposes. In production this would write to a
 * database (e.g. Supabase/Postgres) or a CRM (HubSpot, Salesforce). Kept
 * in module scope so submissions persist across requests during a session.
 */
const leads: (Lead & { id: string; createdAt: string })[] = [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Partial<Lead>): string | null {
  if (!body.name || body.name.trim().length < 2) return "Please enter your full name.";
  if (!body.email || !emailRegex.test(body.email))
    return "Please enter a valid work email.";
  if (!body.company || body.company.trim().length < 2)
    return "Please enter your company name.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<Lead>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const lead = {
    id: crypto.randomUUID(),
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company!.trim(),
    teamSize: body.teamSize || "unspecified",
    interest: body.interest || "unspecified",
    message: body.message?.trim() || "",
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);
  // Simulate a small amount of network/processing latency.
  await new Promise((r) => setTimeout(r, 600));

  console.log(`[lead] New enterprise lead captured: ${lead.company} (${lead.email})`);

  return NextResponse.json(
    { ok: true, id: lead.id, message: "Lead captured successfully." },
    { status: 201 }
  );
}

export async function GET() {
  // Lightweight endpoint to inspect captured leads during the demo.
  return NextResponse.json({ count: leads.length, leads });
}
