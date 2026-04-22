import Link from 'next/link';
import styles from './Hero.module.css';

const HERO_CARDS = [
  { num: '01', title: "Women's Collection", sub: '12 new styles', href: '/women' },
  { num: '02', title: "Men's Nightwear", sub: '6 new styles', href: '/men' },
  { num: '03', title: 'Boys & Girls', sub: '8 new styles', href: '/kids' },
  { num: '04', title: 'Disney & Marvel', sub: 'Licensed', href: '/disney-marvel' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className="eyebrow">Summer Collection 2025</span>
        <h1 className={styles.title}>
          Rest in<br />
          <em>Style,</em><br />
          Every Night
        </h1>
        <p className={styles.sub}>
          Nightwear that moves with you. Soft fabrics, thoughtful cuts,
          made with love in Mumbai since 2011.
        </p>
        <div className={styles.btns}>
          <Link href="/products" className="btn-fill">Explore Now</Link>
          <Link href="/about" className="btn-outline">View Catalogue</Link>
        </div>
      </div>

      <div className={styles.right}>
        {HERO_CARDS.map((card) => (
          <Link href={card.href} key={card.num} className={styles.card}>
            <span className={styles.cardNum}>{card.num}</span>
            <div className={styles.cardLabel}>{card.title}</div>
            <div className={styles.cardSub}>{card.sub}</div>
            <span className={styles.cardArrow}>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
