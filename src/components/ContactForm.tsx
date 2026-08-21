"use client";

import { FormEvent, useState } from "react";
import { MessageIcon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (name.length < 2 || phone.replace(/\D/g, "").length < 9) {
      setError("כדי שנוכל לחזור אליכם, מלאו שם ומספר טלפון תקין.");
      return;
    }
    setError("");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "").trim();
    window.open(whatsappUrl(`היי, שמי ${name}.\nטלפון: ${phone}\nמתעניין/ת ב: ${interest}${message ? `\nפרטים: ${message}` : ""}`), "_blank", "noopener,noreferrer");
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <label><span>שם מלא</span><input name="name" autoComplete="name" required /></label>
      <label><span>טלפון</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" required /></label>
      <label><span>במה תרצו להתמקד?</span><select name="interest" defaultValue="טבעת אירוסין"><option>טבעת אירוסין</option><option>עגילים</option><option>שרשרת או תליון</option><option>צמיד</option><option>יהלום בלבד</option><option>משהו אחר</option></select></label>
      <label><span>פרטים שיעזרו לנו להתכונן</span><textarea name="message" rows={4} /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="primary-action" type="submit"><MessageIcon />פתיחת השיחה ב־WhatsApp</button>
      <p className="form-note">הטופס פותח שיחה מוכנה ב־WhatsApp. שום פרט לא נשמר באתר.</p>
    </form>
  );
}
