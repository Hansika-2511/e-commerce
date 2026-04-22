/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const rows = [
  {
    slug: 'elegant-blossom',
    name: 'Elegant Blossom Nighty',
    category: 'Women · Nighty',
    tag: 'New',
    priceInr: 1499,
    emoji: '🌸',
    bgColor: '#fdeef0',
    imageUrl: 'https://sweetnight.in/storage/files/2/SN%20WOMAN1414.jpg',
    isTrending: true,
    trendingRank: 1,
  },
  {
    slug: 'midnight-blossom',
    name: 'Midnight Blossom Sleep Set',
    category: 'Women · Sleep',
    tag: 'New',
    priceInr: 1899,
    emoji: '🌙',
    bgColor: '#eef0fd',
    imageUrl: 'https://sweetnight.in/storage/files/2/11603%20D.jpg',
    isTrending: true,
    trendingRank: 2,
  },
  {
    slug: 'sunshine-petal',
    name: 'Sunshine Petal Sleep Dress',
    category: 'Girls · Sleep',
    tag: 'Trending',
    priceInr: 999,
    emoji: '☀️',
    bgColor: '#fdf8ee',
    isTrending: true,
    trendingRank: 3,
  },
  {
    slug: 'marvel-heroes',
    name: 'Marvel Heroes Pajama Set',
    category: 'Disney / Marvel · Boys',
    tag: 'Licensed',
    priceInr: 1299,
    emoji: '🦸',
    bgColor: '#eef6fd',
    isTrending: false,
    trendingRank: 10,
  },
  {
    slug: 'classic-stripe',
    name: 'Classic Stripe Pajama Set',
    category: 'Men · Pajama',
    tag: 'New',
    priceInr: 1599,
    emoji: '🌿',
    bgColor: '#eef9f0',
    isTrending: false,
    trendingRank: 11,
  },
  {
    slug: 'blossom-kaftan',
    name: 'Blossom Kaftan Suit',
    category: 'Women · Kaftan',
    tag: 'New',
    priceInr: 2199,
    emoji: '🌺',
    bgColor: '#fdf0f5',
    isTrending: true,
    trendingRank: 4,
  },
  {
    slug: 'disney-princess',
    name: 'Disney Princess Sleep Set',
    category: 'Disney · Girls',
    tag: 'Licensed',
    priceInr: 1199,
    emoji: '✨',
    bgColor: '#fef9e7',
    isTrending: false,
    trendingRank: 12,
  },
  {
    slug: 'couple-set',
    name: 'Couple Night Set',
    category: 'Women & Men · Couple',
    tag: 'Trending',
    priceInr: 3499,
    emoji: '💑',
    bgColor: '#f5eef9',
    isTrending: true,
    trendingRank: 5,
  },
];

async function main() {
  for (const r of rows) {
    await prisma.product.upsert({
      where: { slug: r.slug },
      create: r,
      update: {
        name: r.name,
        category: r.category,
        tag: r.tag,
        priceInr: r.priceInr,
        emoji: r.emoji,
        bgColor: r.bgColor,
        ...(r.imageUrl !== undefined ? { imageUrl: r.imageUrl } : {}),
        isTrending: r.isTrending,
        trendingRank: r.trendingRank,
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
