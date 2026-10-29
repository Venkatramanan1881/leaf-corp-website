import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { enquirySchema } from '@/lib/enquiry';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

// Simple in-memory rate limit (per server instance): 5 requests / 10 min / IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s = '') => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'validation', fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // bot: silently accept

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ENQUIRY_TO, ENQUIRY_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('[enquiry] SMTP not configured; enquiry not delivered');
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    const rows: [string, string | undefined][] = [
      ['Name', d.name], ['Phone', d.phone], ['Email', d.email], ['Business', d.business],
      ['City', d.city], ['Service', d.service], ['Message', d.message],
    ];
    await transport.sendMail({
      from: ENQUIRY_FROM || SMTP_USER,
      to: ENQUIRY_TO || site.email,
      replyTo: d.email || undefined,
      subject: `New website enquiry from ${d.name}`,
      text: rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table cellpadding="6">${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('')}</table>`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[enquiry] send failed', e);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
