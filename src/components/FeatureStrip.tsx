import styles from './FeatureStrip.module.css';

const FEATURES = [
  {
    icon: '🏭',
    title: 'Direct Manufacturer',
    desc: 'Factory prices, no middlemen',
  },
  {
    icon: '🇮🇳',
    title: 'Made in India',
    desc: 'Mumbai craftsmanship, since 2011',
  },
  {
    icon: '✦',
    title: 'Fine Fabrics',
    desc: 'Soft finish, all-night comfort',
  },
  {
    icon: '🏷',
    title: 'Best Price',
    desc: 'Guaranteed competitive pricing',
  },
];

export default function FeatureStrip() {
  return (
    <div className={styles.strip}>
      {FEATURES.map((f) => (
        <div key={f.title} className={styles.item}>
          <span className={styles.icon}>{f.icon}</span>
          <div className={styles.title}>{f.title}</div>
          <div className={styles.desc}>{f.desc}</div>
        </div>
      ))}
    </div>
  );
}
