import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toProductDTO } from '@/lib/product-dto';

export const dynamic = 'force-dynamic';

function sessionId(request: NextRequest) {
  return request.cookies.get('sn_session')?.value ?? null;
}

/** GET — cart lines for current session */
export async function GET(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ items: [] });

  const rows = await prisma.cartItem.findMany({
    where: { sessionId: sid },
    include: { product: true },
  });

  return NextResponse.json({
    items: rows.map((r) => ({
      id: r.id,
      quantity: r.quantity,
      product: toProductDTO(r.product),
    })),
  });
}

/** POST — add or update line { productId, quantity } */
export async function POST(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) {
    return NextResponse.json({ error: 'No session' }, { status: 400 });
  }

  const body = await request.json();
  const productId = String(body.productId ?? '');
  const quantity = Math.max(1, Math.min(99, Math.round(Number(body.quantity ?? 1))));

  if (!productId) {
    return NextResponse.json({ error: 'productId required' }, { status: 400 });
  }

  const item = await prisma.cartItem.upsert({
    where: {
      sessionId_productId: { sessionId: sid, productId },
    },
    create: { sessionId: sid, productId, quantity },
    update: { quantity },
    include: { product: true },
  });

  return NextResponse.json({
    item: {
      id: item.id,
      quantity: item.quantity,
      product: toProductDTO(item.product),
    },
  });
}

/** PATCH — { lineId, quantity } */
export async function PATCH(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ error: 'No session' }, { status: 400 });

  const body = await request.json();
  const lineId = String(body.lineId ?? '');
  const quantity = Math.round(Number(body.quantity ?? 1));

  if (!lineId) return NextResponse.json({ error: 'lineId required' }, { status: 400 });

  const existing = await prisma.cartItem.findFirst({
    where: { id: lineId, sessionId: sid },
  });
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (quantity < 1) {
    await prisma.cartItem.delete({ where: { id: lineId } });
    return NextResponse.json({ ok: true, deleted: true });
  }

  const item = await prisma.cartItem.update({
    where: { id: lineId },
    data: { quantity: Math.min(99, quantity) },
    include: { product: true },
  });

  return NextResponse.json({
    item: {
      id: item.id,
      quantity: item.quantity,
      product: toProductDTO(item.product),
    },
  });
}

/** DELETE — clear cart or ?lineId= */
export async function DELETE(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ error: 'No session' }, { status: 400 });

  const lineId = new URL(request.url).searchParams.get('lineId');
  if (lineId) {
    await prisma.cartItem.deleteMany({ where: { id: lineId, sessionId: sid } });
  } else {
    await prisma.cartItem.deleteMany({ where: { sessionId: sid } });
  }
  return NextResponse.json({ ok: true });
}
