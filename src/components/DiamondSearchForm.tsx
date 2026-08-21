"use client";

import { FormEvent, useState } from "react";
import { DiamondIcon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

export function DiamondSearchForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [
      `צורה: ${data.get("shape")}`,
      `משקל: ${data.get("carat")} קראט`,
      `תקציב: ${data.get("budget")}`,
      `סוג: ${data.get("origin")}`,
    ];
    setSent(true);
    window.open(whatsappUrl(`היי, אשמח לקבל הצעות ליהלום.\n${details.join("\n")}`), "_blank", "noopener,noreferrer");
  }
  return (
    <form className="diamond-form" onSubmit={submit}>
      <fieldset><legend>צורת היהלום</legend><div className="shape-options">{["עגול", "אובל", "אמרלד", "טיפה", "קושן", "פרינסס"].map((shape, index) => <label key={shape}><input type="radio" name="shape" value={shape} defaultChecked={index === 0} /><span><DiamondIcon />{shape}</span></label>)}</div></fieldset>
      <label className="range-field"><span>משקל רצוי: <output id="carat-output">1.00</output> קראט</span><input name="carat" type="range" min="0.3" max="3" step="0.1" defaultValue="1" onInput={(event) => { const output = document.getElementById("carat-output"); if (output) output.textContent = Number(event.currentTarget.value).toFixed(2); }} /></label>
      <label><span>תקציב</span><select name="budget" defaultValue="₪10,000–20,000"><option>עד ₪10,000</option><option>₪10,000–20,000</option><option>₪20,000–40,000</option><option>מעל ₪40,000</option></select></label>
      <fieldset><legend>סוג יהלום</legend><div className="origin-options"><label><input type="radio" name="origin" value="יהלום מעבדה" defaultChecked /><span>יהלום מעבדה</span></label><label><input type="radio" name="origin" value="יהלום טבעי" /><span>יהלום טבעי</span></label><label><input type="radio" name="origin" value="פתוח להצעה" /><span>פתוח להצעה</span></label></div></fieldset>
      <button className="primary-action" type="submit">לקבלת הצעות מתאימות</button>
      {sent && <p className="form-success" role="status">הבקשה מוכנה. אם WhatsApp לא נפתח, נסו שוב.</p>}
    </form>
  );
}
