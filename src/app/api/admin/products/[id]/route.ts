import type { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin-auth';
import { toProductDTO } from '@/lib/product-dto';

export const dynamic = 'force-dynamic';

type Ctx = { params: { id: string } };

/** PATCH — update product (trending, prices, media, etc.) */
export async function PATCH(request: NextRequest, { params }: Ctx) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const data: Prisma.ProductUpdateInput = {};

  if (body.name !== undefined) data.name = String(body.name);
  if (body.slug !== undefined) data.slug = String(body.slug);
  if (body.category !== undefined) data.category = String(body.category);
  if (body.tag !== undefined) data.tag = body.tag === null ? null : String(body.tag);
  if (body.priceInr !== undefined) data.priceInr = Math.round(Number(body.priceInr));
  if (body.emoji !== undefined) data.emoji = body.emoji === null ? null : String(body.emoji);
  if (body.bgColor !== undefined) data.bgColor = body.bgColor === null ? null : String(body.bgColor);
  if (body.imageUrl !== undefined) data.imageUrl = body.imageUrl === null ? null : String(body.imageUrl);
  if (body.videoUrl !== undefined) data.videoUrl = body.videoUrl === null ? null : String(body.videoUrl);
  if (body.description !== undefined) data.description = body.description === null ? null : String(body.description);
  if (body.isTrending !== undefined) data.isTrending = Boolean(body.isTrending);
  if (body.trendingRank !== undefined) data.trendingRank = Number(body.trendingRank);

  try {
    const product = await prisma.product.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json({ product: toProductDTO(product) });
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

/** DELETE */
export async function DELETE(request: NextRequest, { params }: Ctx) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
