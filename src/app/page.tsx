import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/catalog";
import { SITE, whatsappUrl } from "@/lib/site";

const categoryBySlug = (slug: string) => categories.find((category) => category.slug === slug)!;

// v4 "קנייה לפי קטגוריה" lists six entries. Four map to real collections; wedding bands
// and loose stones have no catalogue of their own, so their tiles route to the places
// that can actually answer them rather than to an empty collection page.
const categoryTiles = [
  { ...categoryBySlug("engagement-rings"), href: "/collections/engagement-rings", cta: "לצפייה" },
  {
    name: "טבעות נישואין",
    description: "טבעות נישואין בזהב 18K, מיוצרות לפי המידה ולצד טבעת האירוסין.",
    image: "/images/design/categories/bands-01.jpg",
    href: "/contact",
    cta: "בייצור אישי",
  },
  { ...categoryBySlug("bracelets"), href: "/collections/bracelets", cta: "לצפייה" },
  { ...categoryBySlug("earrings"), name: "עגילים", href: "/collections/earrings", cta: "לצפייה" },
  { ...categoryBySlug("necklaces"), name: "תליונים", href: "/collections/necklaces", cta: "לצפייה" },
  {
    name: "יהלומים בודדים",
    description: "אבן בלבד — לפי צורה, משקל ותקציב, עם מספר תעודה לבדיקה.",
    image: "/images/design/categories/natural-01.jpg",
    href: "/diamond-search",
    cta: "לחיפוש יהלום",
  },
];

export default function HomePage() {
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "he-IL", potentialAction: { "@type": "SearchAction", target: `${SITE.url}/diamond-search?q={search_term_string}`, "query-input": "required name=search_term_string" } };
  const featured = products.filter((product) => product.featured).slice(0, 6);
  return (
    <>
      <JsonLd data={website} />
      <section className="hero">
        <div className="hero-media"><Image src="/images/design/home/hero-01.jpg" alt="טבעת אירוסין סוליטר בזהב לבן על משי בצבע טורקיז כהה" fill priority sizes="100vw" /></div>
        <div className="hero-copy"><h1>הדרך החכמה יותר לקנות יהלומים</h1><p>מפרט ברור, מחיר ישיר וליווי אישי — עד שמוצאים את האבן הנכונה.</p><div className="hero-actions"><Link className="light-action" href="/collections/engagement-rings">לטבעות אירוסין</Link><Link className="text-link light" href="/diamond-search">חיפוש יהלום <ArrowIcon /></Link></div></div>
      </section>

      <section className="featured section-shell" aria-labelledby="featured-title"><div className="section-heading inline"><div><h2 id="featured-title">הנבחרים שלנו</h2><p>עיצובים נקיים שקל להפוך לשלכם.</p></div><Link className="text-link" href="/collections/engagement-rings">לכל הפריטים <ArrowIcon /></Link></div><div className="featured-rail">{featured.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 3} />)}</div></section>

      <section className="category-section section-shell" aria-labelledby="categories-title"><div className="section-heading"><h2 id="categories-title">קנייה לפי קטגוריה</h2><p>לרגע הגדול, ולכל יום אחר.</p></div><div className="category-grid">{categoryTiles.map((tile) => <Link className="category-tile" href={tile.href} key={tile.name}><div><Image src={tile.image} alt="" fill sizes="(max-width: 700px) 75vw, 33vw" /></div><h3>{tile.name}</h3><p>{tile.description}</p><span>{tile.cta} <ArrowIcon /></span></Link>)}</div></section>

      <section className="story-split"><div className="story-media"><Image src="/images/design/home/story-01.jpg" alt="בחינת יהלום בעזרת מלקחיים וזכוכית מגדלת" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="story-copy"><span className="story-eyebrow">למה אנחנו?</span><h2>יהלומים אמיתיים.<br />מחירים אמיתיים.</h2><p className="story-lead">בלי דמי שכירות של קניונים.</p><p>ידעתם שכ־40% מהתשלום על תכשיט ממוצע הולך על שכירות החנות, משכורות וביטוח?</p><p>ויתרנו על חלונות הראווה המפוארים בקניון ועל עלויות התפעול המנופחות, והעברנו את הכול לרשת. התוצאה? אותם 40% נשארים אצלכם בכיס.</p><p>המשמעות פשוטה: באותו התקציב בדיוק, אתם מקבלים יהלום גדול יותר, איכותי יותר ונקי יותר — בלי לשלם על הקירות של החנות.</p><Link className="outline-action" href="/about">הסיפור שלנו</Link></div></section>

      <section className="education section-shell" aria-labelledby="learn-title"><div className="section-heading"><h2 id="learn-title">להבין את היהלום</h2><p>ארבעה דברים שכדאי לדעת לפני שמחליטים.</p></div><div className="education-row"><article><span>משקל</span><strong dir="ltr">CARAT</strong><p>הקראט מודד משקל, לא בהכרח את הגודל שנראה לעין.</p></article><article><span>חיתוך</span><strong dir="ltr">CUT</strong><p>החיתוך קובע כמה אור חוזר מהאבן — ולכן כמה היא מבריקה.</p></article><article><span>צבע</span><strong dir="ltr">COLOR</strong><p>דירוג הצבע מתאר עד כמה היהלום חסר גוון.</p></article><article><span>ניקיון</span><strong dir="ltr">CLARITY</strong><p>דירוג הניקיון מתייחס לסימנים טבעיים בתוך האבן.</p></article></div><Link className="text-link" href="/faq">למדריך הקצר <ArrowIcon /></Link></section>

      <section className="consultation"><div><h2>יש לכם השראה?</h2><p>שלחו לנו מה מצא חן בעיניכם. נחזור עם שתי חלופות ברורות ונקבע פגישה רק אם זה מתאים.</p><div className="consultation-actions"><a className="primary-action" href={whatsappUrl("היי, אשמח לעזרה בבחירת תכשיט יהלום.")} target="_blank" rel="noreferrer">להתייעצות ב־WhatsApp</a><Link className="text-link" href="/contact">לקביעת פגישה <ArrowIcon /></Link></div></div></section>
    </>
  );
}
