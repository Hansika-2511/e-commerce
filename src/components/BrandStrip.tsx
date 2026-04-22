import styles from './BrandStrip.module.css';

const BRANDS = ['Disney', 'Marvel', 'Peanuts', 'Spider-Man'];

export default function BrandStrip() {
  return (
    <div className={styles.strip}>
      <p className={styles.label}>Licensed Collections</p>
      <div className={styles.pills}>
        {BRANDS.map((b) => (
          <div key={b} className={styles.pill}>{b}</div>
        ))}
      </div>
    </div>
  );
}
