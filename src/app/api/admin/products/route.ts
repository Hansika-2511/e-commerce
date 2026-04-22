import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin-auth';
import { toProductDTO } from '@/lib/product-dto';

export const dynamic = 'force-dynamic';

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** POST — create product (requires x-admin-secret). Body: JSON matching Product fields. */
export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const {
    slug: rawSlug,
    name,
    category,
    tag,
    priceInr,
    emoji,
    bgColor,
    imageUrl,
    videoUrl,
    description,
    isTrending,
    trendingRank,
  } = body;

  if (!name || typeof priceInr !== 'number' || !category) {
    return NextResponse.json(
      { error: 'Required: name, category, priceInr (number)' },
      { status: 400 }
    );
  }

  const slug = rawSlug && String(rawSlug).length ? String(rawSlug) : slugify(String(name));

  const product = await prisma.product.create({
    data: {
      slug,
      name: String(name),
      category: String(category),
      tag: tag != null ? String(tag) : null,
      priceInr: Math.round(priceInr),
      emoji: emoji != null ? String(emoji) : null,
      bgColor: bgColor != null ? String(bgColor) : null,
      imageUrl: imageUrl != null ? String(imageUrl) : null,
      videoUrl: videoUrl != null ? String(videoUrl) : null,
      description: description != null ? String(description) : null,
      isTrending: Boolean(isTrending),
      trendingRank: typeof trendingRank === 'number' ? trendingRank : 0,
    },
  });

  return NextResponse.json({ product: toProductDTO(product) }, { status: 201 });
}

/** GET — list all products for admin */
export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const products = await prisma.product.findMany({ orderBy: { name: 'asc' } });
  return NextResponse.json({ products: products.map(toProductDTO) });
}
