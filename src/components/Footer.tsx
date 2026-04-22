import Link from 'next/link';
import styles from './Footer.module.css';

const SHOP_LINKS = [
  { label: 'Women', href: '/women' },
  { label: 'Men', href: '/men' },
  { label: 'Boys', href: '/boys' },
  { label: 'Girls', href: '/girls' },
  { label: 'Disney / Marvel', href: '/disney-marvel' },
  { label: 'Peanuts', href: '/peanuts' },
];

const HELP_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Shipping Policy', href: '/shipping' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            Sweet<em>Night</em>
          </div>
          <p className={styles.desc}>
            India&apos;s premium nightwear manufacturer, based in Mumbai since 2011.
            Factory-direct pricing across women&apos;s, men&apos;s, kids&apos;, and licensed
            collections.
          </p>
        </div>

        <div>
          <div className={styles.heading}>Shop</div>
          <ul className={styles.links}>
            {SHOP_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Help</div>
          <ul className={styles.links}>
            {HELP_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.heading}>Contact Us</div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span className={styles.contactText}>
              G-21, B-12/13, Om Gopal Industry,<br />
              Dadar West, Mumbai 400028
            </span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <span className={styles.contactText}>sweetnight414@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <span className={styles.contactText}>022 2438 6292</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 SweetNight. All rights reserved.</span>
        <span>Made with ♥ in Mumbai, India 🇮🇳</span>
      </div>
    </footer>
  );
}
