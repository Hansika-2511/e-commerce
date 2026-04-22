import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toProductDTO } from '@/lib/product-dto';

export const dynamic = 'force-dynamic';

function sessionId(request: NextRequest) {
  return request.cookies.get('sn_session')?.value ?? null;
}

/** GET */
export async function GET(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ items: [] });

  const rows = await prisma.wishlistItem.findMany({
    where: { sessionId: sid },
    include: { product: true },
  });

  return NextResponse.json({
    items: rows.map((r) => ({
      id: r.id,
      product: toProductDTO(r.product),
    })),
  });
}

/** POST — { productId } toggle off if duplicate: use DELETE instead; we add only */
export async function POST(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ error: 'No session' }, { status: 400 });

  const body = await request.json();
  const productId = String(body.productId ?? '');
  if (!productId) return NextResponse.json({ error: 'productId required' }, { status: 400 });

  const row = await prisma.wishlistItem.upsert({
    where: {
      sessionId_productId: { sessionId: sid, productId },
    },
    create: { sessionId: sid, productId },
    update: {},
    include: { product: true },
  });

  return NextResponse.json({ item: { id: row.id, product: toProductDTO(row.product) } });
}

/** DELETE ?productId= */
export async function DELETE(request: NextRequest) {
  const sid = sessionId(request);
  if (!sid) return NextResponse.json({ error: 'No session' }, { status: 400 });

  const productId = new URL(request.url).searchParams.get('productId');
  if (!productId) {
    await prisma.wishlistItem.deleteMany({ where: { sessionId: sid } });
  } else {
    await prisma.wishlistItem.deleteMany({
      where: { sessionId: sid, productId },
    });
  }
  return NextResponse.json({ ok: true });
}
