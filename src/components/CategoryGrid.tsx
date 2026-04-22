import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryGrid.module.css';

/** These three lifestyle images are used only on the Women's Collection hero tile. */
const WOMEN_IMAGES = [
  'https://sweetnight.in/storage/files/2/Artboard 3 copy 2.jpg',
  'https://sweetnight.in/storage/files/2/Artboard 3 copy 3.jpg',
  'https://sweetnight.in/storage/files/2/Artboard 3.jpg',
];

const WOMEN = {
  tag: 'New Season',
  name: "Women's Collection",
  href: '/women',
};

const MEN_CATEGORY_IMAGE =
  'https://sweetnight.in/storage/files/2/SweetNight/mens/5610%20B.jpg';

const GIRLS_CATEGORY_IMAGE =
  'https://sweetnight.in/storage/files/2/SN%20GIRLS6782.jpg';

const SMALL_CATEGORIES: {
  tag: string;
  name: string;
  href: string;
  bg: 'men' | 'kids' | 'boys' | 'girls';
  imageUrl?: string;
}[] = [
  { tag: 'For Him', name: 'Men', href: '/men', bg: 'men', imageUrl: MEN_CATEGORY_IMAGE },
  { tag: 'Little Dreamers', name: 'Kids', href: '/kids', bg: 'kids' },
  { tag: 'Kids', name: 'Boys', href: '/boys', bg: 'boys' },
  { tag: 'Kids', name: 'Girls', href: '/girls', bg: 'girls', imageUrl: GIRLS_CATEGORY_IMAGE },
];

const BG_CLASS: Record<(typeof SMALL_CATEGORIES)[number]['bg'], string> = {
  men: styles.cardBgMen,
  kids: styles.cardBgKids,
  boys: styles.cardBgBoys,
  girls: styles.cardBgGirls,
};

export default function CategoryGrid() {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <span className="eyebrow">Shop by category</span>
        <h2 className="section-title">
          Curated for <em>Every Dreamer</em>
        </h2>
      </div>

      <div className={styles.grid}>
        <Link href={WOMEN.href} className={`${styles.card} ${styles.cardLarge}`}>
          <div className={styles.womenCollage}>
            {WOMEN_IMAGES.map((src, i) => (
              <div key={src} className={styles.collageCell}>
                <Image
                  src={src}
                  alt={`${WOMEN.name} — look ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 17vw"
                  className={styles.cardImg}
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className={styles.cardOverlay} />
          <div className={styles.cardContent}>
            <span className={styles.tag}>{WOMEN.tag}</span>
            <div className={styles.name}>{WOMEN.name}</div>
            <span className={styles.link}>Shop now →</span>
          </div>
        </Link>

        <div className={styles.smallGrid}>
          {SMALL_CATEGORIES.map((cat) => (
            <Link href={cat.href} key={cat.href} className={styles.card}>
              {cat.imageUrl ? (
                <div className={styles.hoverImgWrap}>
                  <Image
                    className="hover-img"
                    src={cat.imageUrl}
                    alt={`${cat.name} — SweetNight`}
                    fill
                    sizes="(max-width: 480px) 100vw, 25vw"
                    unoptimized
                  />
                </div>
              ) : (
                <div className={`${styles.cardBg} ${BG_CLASS[cat.bg]}`} aria-hidden />
              )}
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <span className={styles.tag}>{cat.tag}</span>
                <div className={`${styles.name} ${styles.nameSm}`}>{cat.name}</div>
                <span className={styles.link}>Shop now →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
