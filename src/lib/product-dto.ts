import type { Product } from '@prisma/client';

export type ProductDTO = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tag: string | null;
  priceInr: number;
  currency: string;
  emoji: string;
  bgColor: string;
  imageUrl: string | null;
  videoUrl: string | null;
  href: string;
  isTrending: boolean;
  trendingRank: number;
};

export function toProductDTO(p: Product): ProductDTO {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category,
    tag: p.tag,
    priceInr: p.priceInr,
    currency: p.currency,
    emoji: p.emoji ?? '🌸',
    bgColor: p.bgColor ?? '#fdeef0',
    imageUrl: p.imageUrl,
    videoUrl: p.videoUrl,
    href: `/products/${p.slug}`,
    isTrending: p.isTrending,
    trendingRank: p.trendingRank,
  };
}
