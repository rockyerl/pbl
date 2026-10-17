import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { purpose, name, email, phone, message } = body ?? {};
  if (!purpose || !name || !message || !/^\S+@\S+\.\S+$/.test(email ?? "") || (phone && !/^\d+$/.test(phone))) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  // TODO: kirim ke info@pbl.co.id (Resend / Nodemailer / SMTP kantor). Sementara hanya dicatat.
  console.log("Contact form:", { purpose, name, email, phone, message });
  return NextResponse.json({ ok: true });
}
