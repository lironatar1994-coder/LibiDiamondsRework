import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { JsonLd } from "@/components/JsonLd";
import { categories, categoryBySlug, productsByCategory } from "@/data/catalog";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };
export function generateStaticParams() { return categories.map(({ slug }) => ({ category: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { category: slug } = await params; const category = categoryBySlug(slug); if (!category) return {}; return { title: category.name, description: category.description, alternates: { canonical: `/collections/${slug}` }, openGraph: { title: `${category.name} | LIBI Diamonds`, description: category.description, images: [{ url: absoluteUrl(category.image) }] } }; }

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params; const category = categoryBySlug(slug); if (!category) notFound(); const items = productsByCategory(slug);
  const list = { "@context": "https://schema.org", "@type": "ItemList", name: category.name, itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(`/product/${item.slug}`), name: item.name })) };
  return <><JsonLd data={list} /><header className="collection-hero"><div><nav className="breadcrumbs" aria-label="פירורי לחם"><Link href="/">בית</Link><span>/</span><span aria-current="page">{category.name}</span></nav><h1>{category.name}</h1><p>{category.description}</p></div><div><Image src={category.image} alt={`מבחר ${category.name} של LIBI Diamonds`} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></header><section className="section-shell collection-content">{items.length ? <CatalogBrowser products={items} /> : <div className="empty-state"><h2>הקולקציה נבנית</h2><p>יש לנו עיצובים נוספים שאינם מוצגים עדיין. ספרו לנו מה אתם מחפשים ונשלח אפשרויות.</p><Link href="/contact">ליצירת קשר</Link></div>}</section></>;
}
