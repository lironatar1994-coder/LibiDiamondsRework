import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, DiamondIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/catalog";
import { SITE, absoluteUrl, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "he-IL", potentialAction: { "@type": "SearchAction", target: `${SITE.url}/diamond-search?q={search_term_string}`, "query-input": "required name=search_term_string" } };
  return (
    <>
      <JsonLd data={website} />
      <section className="hero">
        <div className="hero-media"><Image src="/images/design/home/hero-01.jpg" alt="טבעת יהלום סוליטר על בד סאטן כחול עמוק" fill priority sizes="100vw" /></div>
        <div className="hero-copy"><h1>יהלום,<br />בלי כל מה שסביבו.</h1><p>מפרט ברור, מחיר ישיר וליווי אישי — עד שמוצאים את האבן הנכונה.</p><div className="hero-actions"><Link className="light-action" href="/collections/engagement-rings">לטבעות אירוסין</Link><Link className="text-link light" href="/diamond-search">חיפוש יהלום <ArrowIcon /></Link></div></div>
      </section>

      <section className="category-section section-shell" aria-labelledby="categories-title"><div className="section-heading"><h2 id="categories-title">מה אתם מחפשים?</h2><p>מתחילים מהתכשיט, מהתקציב או מהאבן — ומתקדמים בקצב שלכם.</p></div><div className="category-grid">{categories.map((category) => <Link className="category-tile" href={`/collections/${category.slug}`} key={category.slug}><div><Image src={category.image} alt="" fill sizes="(max-width: 700px) 75vw, 25vw" /></div><h3>{category.name}</h3><p>{category.description}</p><span>לצפייה <ArrowIcon /></span></Link>)}</div></section>

      <section className="story-split"><div className="story-media"><Image src="/images/design/home/story-01.jpg" alt="בחינת יהלום בעזרת מלקחיים וזכוכית מגדלת" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="story-copy"><h2>יהלומים אמיתיים.<br />מחירים אמיתיים.</h2><p>אנחנו מציגים את המפרט שמאחורי הברק: משקל, צבע, ניקיון, חיתוך ודוח דירוג. כך אפשר לבחור לפי מה שחשוב לכם — ולא לפי חלון ראווה.</p><ul><li><CheckIcon />בחירה מתוך אבנים זמינות</li><li><CheckIcon />השוואה שקופה בין חלופות</li><li><CheckIcon />ייצור והתאמה אישית בזהב 18K</li></ul><Link className="outline-action" href="/about">הסיפור שלנו</Link></div></section>

      <section className="education section-shell" aria-labelledby="learn-title"><div className="section-heading"><h2 id="learn-title">להבין את היהלום</h2><p>ארבעה דברים שכדאי לדעת לפני שמחליטים.</p></div><div className="education-row"><article><span>משקל</span><strong dir="ltr">CARAT</strong><p>הקראט מודד משקל, לא בהכרח את הגודל שנראה לעין.</p></article><article><span>חיתוך</span><strong dir="ltr">CUT</strong><p>החיתוך קובע כמה אור חוזר מהאבן — ולכן כמה היא מבריקה.</p></article><article><span>צבע</span><strong dir="ltr">COLOR</strong><p>דירוג הצבע מתאר עד כמה היהלום חסר גוון.</p></article><article><span>ניקיון</span><strong dir="ltr">CLARITY</strong><p>דירוג הניקיון מתייחס לסימנים טבעיים בתוך האבן.</p></article></div><Link className="text-link" href="/faq">למדריך הקצר <ArrowIcon /></Link></section>

      <section className="difference"><div className="section-shell"><div className="section-heading"><h2>ההבדל של ליבי</h2></div><div className="difference-grid"><article><DiamondIcon /><h3>בוחרים את האבן</h3><p>רואים את הנתונים ואת דוח הדירוג לפני שמאשרים.</p></article><article><DiamondIcon /><h3>מתאימים את התכשיט</h3><p>מתכת, מידה ופרופורציות שנקבעות לפי היד והטעם.</p></article><article><DiamondIcon /><h3>נפגשים עם אדם</h3><p>שיחה אחת עם מי שמלווה את הבחירה מתחילתה ועד המסירה.</p></article></div></div></section>

      <section className="featured section-shell" aria-labelledby="featured-title"><div className="section-heading inline"><div><h2 id="featured-title">הנבחרים שלנו</h2><p>עיצובים נקיים שקל להפוך לשלכם.</p></div><Link className="text-link" href="/collections/engagement-rings">לכל הפריטים <ArrowIcon /></Link></div><div className="featured-rail">{products.filter((product) => product.featured).slice(0, 6).map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 2} />)}</div></section>

      <section className="consultation"><div><h2>קשה להחליט מתמונה?</h2><p>שלחו לנו מה מצא חן בעיניכם. נחזור עם שתי חלופות ברורות ונקבע פגישה רק אם זה מתאים.</p><a className="outline-action" href={whatsappUrl("היי, אשמח לעזרה בבחירת תכשיט יהלום.")} target="_blank" rel="noreferrer">להתייעצות ב־WhatsApp</a></div></section>
    </>
  );
}
