"use client";

import { useMemo, useState } from "react";
import type { Metal, Product } from "@/data/catalog";
import { metalNames } from "@/data/catalog";
import { CheckIcon, MessageIcon } from "@/components/Icons";
import { formatPrice, whatsappUrl } from "@/lib/site";

export function ProductConfigurator({ product }: { product: Product }) {
  const [metal, setMetal] = useState<Metal>(product.metals[0]);
  const [carat, setCarat] = useState(product.carats[0].label);
  const [size, setSize] = useState(product.sizes?.[3] || "");
  const selected = product.carats.find((option) => option.label === carat) || product.carats[0];
  const href = useMemo(() => whatsappUrl(`היי, אשמח לבדוק זמינות עבור ${product.name}.\nמתכת: ${metalNames[metal]} 18K\nמשקל יהלום: ${carat} קראט${size ? `\nמידת טבעת: ${size}` : ""}\nמחיר מוצג: ${formatPrice(selected.price)}`), [carat, metal, product.name, selected.price, size]);

  return (
    <div className="configurator">
      <p className="product-price">החל מ־<strong>{formatPrice(selected.price)}</strong></p>
      <p className="price-note">המחיר הסופי תלוי באבן הספציפית ובזמינותה.</p>
      <fieldset><legend>צבע זהב</legend><div className="choice-row">{product.metals.map((item) => <button key={item} className={`metal-choice ${item} ${metal === item ? "selected" : ""}`} type="button" onClick={() => setMetal(item)} aria-pressed={metal === item}><span aria-hidden="true" />{metalNames[item]}{metal === item && <CheckIcon />}</button>)}</div><p className="choice-note">התמונות מציגות דגם לדוגמה; גוון המתכת נבחר בהזמנה.</p></fieldset>
      <fieldset><legend>משקל יהלום</legend><div className="choice-row compact">{product.carats.map((option) => <button key={option.label} type="button" className={carat === option.label ? "selected" : ""} onClick={() => setCarat(option.label)} aria-pressed={carat === option.label}><b dir="ltr">{option.label}</b><span>קראט</span></button>)}</div></fieldset>
      {product.sizes && <label className="size-select"><span>מידת טבעת</span><select value={size} onChange={(event) => setSize(event.target.value)}>{product.sizes.map((item) => <option key={item}>{item}</option>)}</select></label>}
      <a className="primary-action" href={href} target="_blank" rel="noreferrer"><MessageIcon />לבדיקת זמינות ב־WhatsApp</a>
      <ul className="assurances"><li><CheckIcon />בחירת יהלום לפני אישור ההזמנה</li><li><CheckIcon />זהב 18K ואחריות על הייצור</li><li><CheckIcon />התאמת מידה אישית</li></ul>
    </div>
  );
}
