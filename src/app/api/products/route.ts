import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { toProductDTO } from '@/lib/product-dto';

export const dynamic = 'force-dynamic';

/** Public: list all products (client filters by category tab). */
export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: [{ isTrending: 'desc' }, { trendingRank: 'asc' }, { name: 'asc' }],
  });
  return NextResponse.json({ products: products.map(toProductDTO) });
}
