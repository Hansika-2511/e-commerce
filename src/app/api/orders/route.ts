import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function sessionId(request: NextRequest) {
  return request.cookies.get('sn_session')?.value ?? null;
}

/** POST — record a purchase: { email?, lines: [{ productId, quantity }] } */
export async function POST(request: NextRequest) {
  const sid = sessionId(request);
  const body = await request.json();
  const email = body.email != null ? String(body.email) : null;
  const lines = body.lines as { productId: string; quantity: number }[] | undefined;

  if (!lines?.length) {
    return NextResponse.json({ error: 'lines[] required' }, { status: 400 });
  }

  const products = await prisma.product.findMany({
    where: { id: { in: lines.map((l) => l.productId) } },
  });
  const priceById = new Map(products.map((p) => [p.id, p.priceInr]));

  const order = await prisma.order.create({
    data: {
      sessionId: sid,
      email,
      lines: {
        create: lines.map((l) => ({
          productId: l.productId,
          quantity: Math.max(1, Math.round(l.quantity)),
          priceInr: priceById.get(l.productId) ?? 0,
        })),
      },
    },
    include: { lines: true },
  });

  return NextResponse.json({ orderId: order.id, status: order.status }, { status: 201 });
}
