import type { Metadata } from "next";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { MessageIcon, PhoneIcon } from "@/components/Icons";
import { SITE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "יצירת קשר וקביעת פגישה", description: "קבעו פגישת ייעוץ אישית לבחירת יהלום או תכשיט. אפשר ליצור קשר בטלפון או ב-WhatsApp.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <div className="simple-page contact-page"><header><h1>יצירת קשר</h1><p>ספרו לנו מה אתם מחפשים. נחזור עם כיוון ברור ונקבע פגישה רק אם תרצו.</p></header><div className="contact-layout"><ContactForm /><aside><h2>מעדיפים לדבר עכשיו?</h2><a href={whatsappUrl("היי, אשמח להתייעץ לגבי תכשיט יהלום.")} target="_blank" rel="noreferrer"><MessageIcon /><span>WhatsApp</span><small>מענה בשעות הפעילות</small></a><a href={SITE.phoneHref}><PhoneIcon /><span dir="ltr">{SITE.phoneDisplay}</span><small>א׳–ה׳ 09:00–18:00</small></a><div><h3>פגישה בתיאום מראש</h3><p>כדי שנוכל להכין מראש אבנים ודוגמאות רלוונטיות, הפגישות מתקיימות בתיאום.</p></div></aside></div><ProcessSteps /></div>; }
