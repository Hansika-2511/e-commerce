import Link from 'next/link';
import styles from './AboutSection.module.css';

const STATS = [
  { num: '14+', label: 'Years of craft' },
  { num: '200+', label: 'Styles available' },
  { num: '4', label: 'Licensed brands' },
  { num: 'PAN', label: 'India delivery' },
];

const GALLERY = [
  { emoji: '👗', aspect: '3/4', bg: '#f2e0e0' },
  { emoji: '🛍️', aspect: '1/1', bg: '#f0e8f0' },
  { emoji: '⭐', aspect: '4/3', bg: '#f0f0e0' },
];

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className="eyebrow">Our Story</span>
        <h2 className={styles.title}>
          Crafted in<br />
          <em>Mumbai,</em><br />
          Loved Across India
        </h2>
        <p className={styles.desc}>
          SweetNight began as a small manufacturer in Dadar West with a simple
          belief — that everyone deserves to sleep beautifully. Today we offer
          India&apos;s widest range of licensed and original nightwear, from classic
          cotton sets to exclusive Disney &amp; Marvel collections.
        </p>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <Link href="/about" className="btn-fill">About Us</Link>
      </div>

      <div className={styles.gallery}>
        {GALLERY.map((g, i) => (
          <div
            key={i}
            className={styles.galleryImg}
            style={{ background: g.bg, aspectRatio: g.aspect }}
          >
            <span className={styles.galleryEmoji}>{g.emoji}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
