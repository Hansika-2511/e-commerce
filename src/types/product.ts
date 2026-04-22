/** Product shape returned by /api/products and used in UI */
export type ShopProduct = {
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
