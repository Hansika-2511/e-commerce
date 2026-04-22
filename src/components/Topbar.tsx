import Link from 'next/link';

export default function Topbar() {
  return (
    <div>
      <div className="info-bar">
        <div className="info-left">
          <span className="info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16z"/></svg>
            022 2438 6292
          </span>
          <span className="info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            sweetnight414@gmail.com
          </span>
        </div>
        <div className="info-right">
          <span className="info-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Dadar West, Mumbai
          </span>
          <span className="info-divider">|</span>
          <span className="info-promo">✦ Free shipping above ₹999 ✦</span>
        </div>
      </div>

      <div className="brand-bar">
        <Link href="/" className="brand-logo">
          Sweet<em>Night</em>
        </Link>
        <div className="search-wrap">
          <select className="search-select" aria-label="Category">
            <option>All Category</option>
            <option>Women</option>
            <option>Men</option>
            <option>Boys</option>
            <option>Girls</option>
            <option>Disney / Marvel</option>
            <option>Peanuts</option>
          </select>
          <div className="search-divider" />
          <input
            className="search-input"
            type="search"
            placeholder="Search products here..."
            aria-label="Search products"
          />
          <button className="search-btn" type="button" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>
          </button>
        </div>
        <div className="brand-actions">
          <button className="action-btn" type="button" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span className="action-badge">2</span>
          </button>
          <button className="action-btn" type="button" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="action-badge">0</span>
          </button>
        </div>
      </div>

      <style>{`
        .info-bar {
          background: #1a1a1a;
          padding: 8px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #aaa;
          font-family: var(--font-body);
        }
        .info-left, .info-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #aaa;
          letter-spacing: 0.3px;
          transition: color 0.2s;
          cursor: default;
        }
        .info-item:hover { color: #e8c8c8; }
        .info-item svg { opacity: 0.6; flex-shrink: 0; }
        .info-divider { color: #333; }
        .info-promo {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #c97b7b;
          font-weight: 500;
        }

        .brand-bar {
          background: #ffffff;
          padding: 14px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          border-bottom: 1px solid #f0e5e5;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }

        .brand-logo {
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
          letter-spacing: 1px;
          flex-shrink: 0;
          line-height: 1;
        }
        .brand-logo em {
          font-style: italic;
          color: #c97b7b;
        }

        .search-wrap {
          flex: 1;
          max-width: 580px;
          display: flex;
          align-items: center;
          border: 1.5px solid #e8d8d8;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          transition: border-color 0.2s;
        }
        .search-wrap:focus-within {
          border-color: #c97b7b;
        }
        .search-select {
          background: #fdf5f5;
          border: none;
          border-right: 1.5px solid #e8d8d8;
          padding: 11px 14px;
          font-family: var(--font-body);
          font-size: 12px;
          color: #555;
          cursor: pointer;
          outline: none;
          min-width: 140px;
          letter-spacing: 0.3px;
        }
        .search-divider {
          width: 0;
          flex-shrink: 0;
          align-self: stretch;
          border-left: 1.5px solid #e8d8d8;
        }
        .search-input {
          flex: 1;
          border: none;
          padding: 11px 16px;
          font-family: var(--font-body);
          font-size: 13px;
          color: #1a1a1a;
          outline: none;
          background: #fff;
          min-width: 0;
        }
        .search-input::placeholder { color: #bbb; }
        .search-btn {
          background: #c97b7b;
          border: none;
          padding: 11px 18px;
          cursor: pointer;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .search-btn:hover { background: #b56868; }

        .brand-actions {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
        }
        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #444;
          padding: 8px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 42px;
          height: 42px;
          transition: color 0.2s, background 0.2s;
        }
        .action-btn:hover {
          color: #c97b7b;
          background: #fdf5f5;
        }
        .action-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: #c97b7b;
          color: #fff;
          font-size: 9px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-weight: 600;
          border: 1.5px solid #fff;
        }
      `}</style>
    </div>
  );
}
