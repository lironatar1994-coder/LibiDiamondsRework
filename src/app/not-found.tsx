import Link from "next/link";
export default function NotFound() { return <div className="not-found"><span dir="ltr">404</span><h1>העמוד לא נמצא</h1><p>יכול להיות שהקישור השתנה. אפשר לחזור לעמוד הבית או לעבור לקולקציות.</p><div><Link className="primary-action" href="/">לעמוד הבית</Link><Link className="outline-action" href="/collections/engagement-rings">לטבעות אירוסין</Link></div></div>; }
