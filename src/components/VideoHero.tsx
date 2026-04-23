'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import styles from './VideoHero.module.css';

const VIDEO_SRC =
  'https://sweetnight.in/storage/files/2/Banner/video/Sweet-night-collection-film-new.mp4';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = () => {
      void el.play().catch(() => {});
    };

    tryPlay();
    el.addEventListener('loadeddata', tryPlay);
    el.addEventListener('canplay', tryPlay);
    return () => {
      el.removeEventListener('loadeddata', tryPlay);
      el.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>Summer Collection 2025</span>
        <h1 className={styles.title}>
          Rest in <em>Style,</em><br />Every Night
        </h1>
        <p className={styles.sub}>
          Premium nightwear crafted with love in Mumbai since 2011.
        </p>
        <div className={styles.btns}>
          <Link href="/products" className="btn-fill">Explore Now</Link>
          <Link href="/about" className="btn-fill">View Catalogue</Link>
        </div>
      </div>
    </section>
  );
}
