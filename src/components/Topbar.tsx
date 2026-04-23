import Link from 'next/link';
import styles from './Topbar.module.css';

export default function Topbar() {
  return (
    <header>
      <div className={styles.infoBar}>
        <div className={styles.infoLeft}>
          <span className={styles.infoItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
            022 2438 6292
          </span>
          <span className={styles.infoItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            sweetnight414@gmail.com
          </span>
        </div>
        <div className={styles.infoRight}>
          <span className={styles.infoItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Dadar West, Mumbai
          </span>
          <span className={styles.infoDivider}>|</span>
          <span className={styles.infoPromo}>✦ Free shipping above ₹999 ✦</span>
        </div>
      </div>

      <div className={styles.brandBar}>
        <Link href="/" className={styles.brandLogo}>
          Sweet<em>Night</em>
        </Link>
        <div className={styles.searchWrap}>
          <select className={styles.searchSelect} aria-label="Category">
            <option>All Category</option>
            <option>Women</option>
            <option>Men</option>
            <option>Boys</option>
            <option>Girls</option>
            <option>Disney / Marvel</option>
            <option>Peanuts</option>
          </select>
          <div className={styles.searchDivider} />
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search products here..."
            aria-label="Search products"
          />
          <button className={styles.searchBtn} type="button" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
          </button>
        </div>
        <div className={styles.brandActions}>
          <button className={styles.actionBtn} type="button" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span className={styles.actionBadge}>2</span>
          </button>
          <button className={styles.actionBtn} type="button" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className={styles.actionBadge}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
