"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/catalog";

type Sort = "recommended" | "low" | "high";

export function CatalogBrowser({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<Sort>("recommended");
  const [maxPrice, setMaxPrice] = useState(25000);
  const shown = useMemo(() => {
    const filtered = products.filter((product) => product.priceFrom <= maxPrice);
    if (sort === "low") return [...filtered].sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "high") return [...filtered].sort((a, b) => b.priceFrom - a.priceFrom);
    return filtered;
  }, [maxPrice, products, sort]);

  return (
    <div className="catalog-browser">
      <div className="catalog-tools" aria-label="סינון ומיון מוצרים">
        <label><span>מחיר עד</span><select value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))}><option value="5000">₪5,000</option><option value="10000">₪10,000</option><option value="15000">₪15,000</option><option value="25000">ללא הגבלה</option></select></label>
        <label><span>מיון</span><select value={sort} onChange={(event) => setSort(event.target.value as Sort)}><option value="recommended">מומלצים</option><option value="low">מחיר: מהנמוך</option><option value="high">מחיר: מהגבוה</option></select></label>
        <p aria-live="polite">{shown.length} פריטים</p>
      </div>
      {shown.length ? <div className="product-grid">{shown.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 4} />)}</div> : <div className="empty-state"><h2>לא נמצאו פריטים בטווח הזה</h2><p>אפשר להרחיב את טווח המחיר או לדבר איתנו על עיצוב מותאם.</p><button type="button" onClick={() => setMaxPrice(25000)}>הצגת כל הפריטים</button></div>}
    </div>
  );
}
