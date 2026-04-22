'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
   
const NAV_LINKS = [
  { label: 'Women', href: '/women', sub: [
      { label: 'Payjama Set', href: '/women/payjama-set' },
      { label: 'Capri Set', href: '/women/capri-set' },
      { label: 'Bermuda Set', href: '/women/bermuda-set' },
      { label: 'Sleep', href: '/women/sleep' },
      { label: 'Ankle Nighty', href: '/women/ankle-nighty' },
      { label: 'Bottom', href: '/women/bottom' },
      { label: 'T-Shirt', href: '/women/t-shirt' },
      { label: 'Nighty', href: '/women/nighty' },
      { label: 'Bathrobe', href: '/women/bathrobe' },
      { label: 'Couple Set', href: '/women/couple-set' },
      { label: 'Kaftan Suit', href: '/women/kaftan-suit' },
      { label: 'Notched Collar', href: '/women/notched-collar' },
  ]},
  { label: 'Men', href: '/men', sub: [
      { label: 'Payjama Set', href: '/men/payjama-set' },
      { label: 'Co-Ord Set', href: '/men/co-ord-set' },
  ]},
  { label: 'Kids', href: '/kids', sub: [] },
  { label: 'Boys', href: '/boys', sub: [
      { label: 'Pyjama Set', href: '/boys/pyjama-set' },
      { label: 'Co-ord Set', href: '/boys/co-ord-set' },
      { label: 'Capri Set', href: '/boys/capri-set' },
      { label: 'Bermuda Set', href: '/boys/bermuda-set' },
  ]},
  { label: 'Girls', href: '/girls', sub: [
      { label: 'Pajama Sets', href: '/girls/pajama-sets' },
      { label: 'Co-Ord Set', href: '/girls/co-ord-set' },
      { label: 'Capri Set', href: '/girls/capri-set' },
      { label: 'Bermuda Set', href: '/girls/bermuda-set' },
      { label: 'Sleep', href: '/girls/sleep' },
      { label: 'Bathrobe', href: '/girls/bathrobe' },
  ]},
  { label: 'Disney / Marvel', href: '/disney-marvel', sub: [
      { label: 'Women', href: '/disney-marvel/women' },
      { label: 'Boys', href: '/disney-marvel/boys' },
      { label: 'Girls', href: '/disney-marvel/girls' },
      { label: 'Mens', href: '/disney-marvel/mens' },
  ]},
  { label: 'Peanuts', href: '/peanuts', sub: [
      { label: 'Women', href: '/peanuts/women' },
      { label: 'Boys', href: '/peanuts/boys' },
      { label: 'Girls', href: '/peanuts/girls' },
      { label: 'Mens', href: '/peanuts/mens' },
  ]},
];

export default function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
              {link.sub.length > 0 && (
                <span className={styles.arrow}>▾</span>
              )}
            </Link>
            {link.sub.length > 0 && (
              <div className={styles.dropdown}>
                {link.sub.map((s) => (
                  <Link key={s.href} href={s.href} className={styles.dropItem}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
