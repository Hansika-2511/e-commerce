'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          Join the <em>Sweet Night</em> family
        </h2>
        <p className={styles.sub}>
          Be the first to know about new arrivals, exclusive deals, and seasonal
          collections. 10% off your first order when you subscribe.
        </p>
      </div>

      <div className={styles.right}>
        {submitted ? (
          <div className={styles.thanks}>
            <span className={styles.thanksIcon}>✓</span>
            <p className={styles.thanksText}>
              Welcome to the family, {name || 'friend'}! Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.btn}>
              Subscribe &amp; Get 10% Off
            </button>
            <span className={styles.note}>No spam, unsubscribe anytime.</span>
          </form>
        )}
      </div>
    </section>
  );
}
