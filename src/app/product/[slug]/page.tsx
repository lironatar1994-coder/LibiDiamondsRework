import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProcessSteps } from "@/components/ProcessSteps";
import { JsonLd } from "@/components/JsonLd";
import { ProductConfigurator } from "@/components/ProductConfigurator";
import { ProductCard } from "@/components/ProductCard";
import { categoryBySlug, productBySlug, products } from "@/data/catalog";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const product = productBySlug(slug); if (!product) return {}; return { title: product.name, description: product.description, alternates: { canonical: `/product/${slug}` }, openGraph: { type: "website", title: product.name, description: product.description, images: [{ url: absoluteUrl(product.image) }] } }; }

export default async function ProductPage({ params }: Props) {
  const { slug } = await params; const product = productBySlug(slug); if (!product) notFound(); const category = categoryBySlug(product.category); const related = products.filter((item) => item.category === product.category && item.slug !== slug).slice(0, 4);
  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, image: product.gallery.map((image) => absoluteUrl(image.src)), sku: product.slug, brand: { "@type": "Brand", name: "LIBI Diamonds" }, offers: { "@type": "AggregateOffer", priceCurrency: "ILS", lowPrice: product.priceFrom, offerCount: product.carats.length, availability: "https://schema.org/PreOrder", url: absoluteUrl(`/product/${slug}`) } };
  return <><JsonLd data={schema} /><div className="product-page"><nav className="breadcrumbs product-breadcrumbs" aria-label="פירורי לחם"><Link href="/">בית</Link><span>/</span><Link href={`/collections/${product.category}`}>{category?.name}</Link><span>/</span><span aria-current="page">{product.shortName}</span></nav><div className="product-layout"><div className="product-gallery">{product.gallery.map((image, index) => <figure key={image.src}><Image src={image.src} alt={image.alt} fill priority={index === 0} sizes="(max-width: 850px) 100vw, 48vw" /></figure>)}</div><aside className="product-details"><p className="product-category">{category?.name}</p><h1>{product.name}</h1><p className="product-subtitle">{product.subtitle}</p><ProductConfigurator product={product} /><details open><summary>תיאור ופרטים</summary><p>{product.description}</p></details><details><summary>מפרט</summary><dl>{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></details><details><summary>משלוח ואחריות</summary><p>זמן הכנה משוער: 10–21 ימי עסקים. התכשיט כולל אחריות על פגמי ייצור; התנאים המלאים מופיעים בעמוד המשלוחים וההחזרות.</p></details></aside></div><ProcessSteps id="product-process-title" /></div>{related.length > 0 && <section className="related section-shell"><div className="section-heading inline"><h2>אולי תאהבו גם</h2><Link className="text-link" href={`/collections/${product.category}`}>לקולקציה</Link></div><div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>}</>;
}
