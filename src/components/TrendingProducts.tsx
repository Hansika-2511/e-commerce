'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from './TrendingProducts.module.css';
import type { ShopProduct } from '@/types/product';

const TABS = ['All', 'Women', 'Men', 'Boys', 'Girls', 'Disney / Marvel'];

function filterProducts(tab: string, list: ShopProduct[]): ShopProduct[] {
  if (tab === 'All') return list;
  return list.filter((p) => p.category.toLowerCase().includes(tab.toLowerCase()));
}

export default function TrendingProducts() {
  const [activeTab, setActiveTab] = useState('All');
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/products', { credentials: 'include' });
        if (!res.ok) throw new Error('Failed to load products');
        const data = await res.json();
        if (!cancelled) setProducts(data.products ?? []);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = filterProducts(activeTab, products);

  return (
    <section className={styles.section}>
      <div className="section-header">
        <span className="eyebrow">Featured</span>
        <h2 className="section-title">
          This Season&apos;s <em>Favourites</em>
        </h2>
      </div>

      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading && <p className={styles.empty}>Loading products…</p>}
      {error && !loading && (
        <p className={styles.empty}>Could not load products. Is the database set up? Run npm run db:push && npm run db:seed</p>
      )}
      {!loading && !error && filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : null}
      {!loading && !error && filtered.length === 0 ? (
        <p className={styles.empty}>No products found in this category.</p>
      ) : null}
    </section>
  );
}
