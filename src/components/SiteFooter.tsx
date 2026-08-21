import Link from "next/link";
import { DiamondIcon, MessageIcon, PhoneIcon } from "@/components/Icons";
import { SITE, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="help-strip" aria-labelledby="help-title">
        <h2 id="help-title">איך נוכל לעזור?</h2>
        <div>
          <a href={whatsappUrl("היי, אשמח לעזרה בבחירת תכשיט יהלום.")} target="_blank" rel="noreferrer"><MessageIcon /><span>WhatsApp</span></a>
          <a href={SITE.phoneHref}><PhoneIcon /><span>שיחה</span></a>
          <Link href="/contact"><DiamondIcon /><span>קביעת פגישה</span></Link>
        </div>
      </section>
      <div className="footer-main">
        <div className="footer-brand"><strong>LIBI</strong><span>DIAMONDS</span><p>יהלומים ותכשיטים בהתאמה אישית,<br />בפגישה רגועה ובלי לחץ.</p></div>
        <nav aria-label="מידע וקישורים">
          <div><h2>קולקציות</h2><Link href="/collections/engagement-rings">טבעות אירוסין</Link><Link href="/collections/earrings">עגילים</Link><Link href="/collections/necklaces">שרשראות</Link><Link href="/collections/bracelets">צמידים</Link></div>
          <div><h2>מידע</h2><Link href="/diamond-search">חיפוש יהלום</Link><Link href="/faq">שאלות נפוצות</Link><Link href="/about">הסיפור שלנו</Link><Link href="/shipping-returns">משלוח והחזרות</Link></div>
          <div><h2>דברו איתנו</h2><a href={SITE.phoneHref} dir="ltr">{SITE.phoneDisplay}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a><Link href="/contact">קביעת פגישה</Link></div>
        </nav>
      </div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} LIBI Diamonds</span><nav aria-label="קישורים משפטיים"><Link href="/accessibility">הצהרת נגישות</Link><Link href="/terms">תקנון</Link><Link href="/privacy">פרטיות</Link></nav></div>
    </footer>
  );
}
