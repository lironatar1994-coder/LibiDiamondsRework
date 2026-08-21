import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/catalog";
import { formatPrice } from "@/lib/site";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} aria-label={`${product.name}, ${formatPrice(product.priceFrom)}`}>
        <div className="product-card-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 47vw, (max-width: 1100px) 31vw, 25vw" priority={priority} /></div>
        <div className="product-card-copy"><h2>{product.shortName}</h2><p>{product.subtitle}</p><strong>החל מ־{formatPrice(product.priceFrom)}</strong></div>
      </Link>
    </article>
  );
}
