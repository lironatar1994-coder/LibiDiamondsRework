import type { Metadata } from "next";
import Image from "next/image";
import { DiamondSearchForm } from "@/components/DiamondSearchForm";

export const metadata: Metadata = { title: "חיפוש יהלום", description: "ספרו לנו איזו צורה, משקל ותקציב אתם מחפשים ונחזור עם הצעות ליהלומים מתאימים להשוואה.", alternates: { canonical: "/diamond-search" } };
export default function DiamondSearchPage() { return <div className="form-page"><header className="form-page-head"><div><h1>חיפוש יהלום</h1><p>ארבע בחירות קצרות יעזרו לנו להכין הצעות שאפשר באמת להשוות.</p></div><Image src="/images/design/categories/natural-01.jpg" alt="יהלומים עגולים בגדלים שונים על בד כחול עמוק" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></header><section className="form-page-content"><div className="form-intro"><h2>מתחילים מהמפרט</h2><p>לא צריך לדעת הכול. בחרו כיוון ראשוני, ואנחנו נבדוק אבנים זמינות ונציג לכל אחת מחיר, נתונים ודוח דירוג.</p><ol><li>מגדירים צורה ומשקל</li><li>מקבלים שתיים–שלוש חלופות</li><li>רואים את דוחות הדירוג</li><li>בוחרים רק אחרי השוואה</li></ol></div><DiamondSearchForm /></section></div>; }
