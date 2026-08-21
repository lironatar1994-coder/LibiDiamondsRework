import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/catalog";
import { formatPrice } from "@/lib/site";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const label = [product.name, product.stoneSpec, formatPrice(product.priceFrom)].filter(Boolean).join(", ");
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} aria-label={label}>
        <div className="product-card-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 47vw, (max-width: 1100px) 31vw, 25vw" priority={priority} /></div>
        <div className="product-card-copy">
          <h2>{product.shortName}</h2>
          <p>{product.subtitle}</p>
          {product.stoneSpec && <span className="stone-spec" dir="ltr">{product.stoneSpec}</span>}
          <strong>החל מ־{formatPrice(product.priceFrom)}</strong>
        </div>
      </Link>
    </article>
  );
}
