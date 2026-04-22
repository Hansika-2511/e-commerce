'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import type { ShopProduct } from '@/types/product';
import { formatInr } from '@/lib/format-inr';

export default function ProductCard({ product }: { product: ShopProduct }) {
  const [wished, setWished] = useState(false);
  const [cartBusy, setCartBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/wishlist', { credentials: 'include' });
        if (!res.ok || cancelled) return;
        const data = await res.json();
        const ids = new Set((data.items ?? []).map((x: { product: { id: string } }) => x.product.id));
        if (!cancelled) setWished(ids.has(product.id));
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [product.id]);

  const toggleWishlist = useCallback(async () => {
    try {
      if (wished) {
        await fetch(`/api/wishlist?productId=${encodeURIComponent(product.id)}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        setWished(false);
      } else {
        await fetch('/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ productId: product.id }),
        });
        setWished(true);
      }
    } catch {
      /* ignore */
    }
  }, [product.id, wished]);

  const addToCart = useCallback(async () => {
    setCartBusy(true);
    try {
      await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
    } finally {
      setCartBusy(false);
    }
  }, [product.id]);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap} style={{ background: product.bgColor }}>
        <Link href={product.href} className={styles.imgLink}>
          {product.tag && <span className={styles.tag}>{product.tag}</span>}
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className={`${styles.photo} hover-img`}
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          ) : (
            <span className={styles.emoji}>{product.emoji}</span>
          )}
        </Link>
        <div className={styles.hover}>
          <button type="button" className={styles.enquireBtn} onClick={addToCart}>
            {cartBusy ? 'Adding…' : 'Add to cart'}
          </button>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.category}>{product.category}</div>
        <Link href={product.href} className={styles.name}>{product.name}</Link>
        <div className={styles.price}>{formatInr(product.priceInr)}</div>
        <button
          type="button"
          className={`${styles.wish} ${wished ? styles.wished : ''}`}
          onClick={toggleWishlist}
          aria-label="Add to wishlist"
        >
          {wished ? '♥' : '♡'} Wishlist
        </button>
      </div>
    </div>
  );
}
