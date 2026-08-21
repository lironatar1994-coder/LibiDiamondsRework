"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon, SearchIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

const links = [
  ["טבעות אירוסין", "/collections/engagement-rings"],
  ["עגילים", "/collections/earrings"],
  ["שרשראות", "/collections/necklaces"],
  ["צמידים", "/collections/bracelets"],
  ["חיפוש יהלום", "/diamond-search"],
  ["הסיפור שלנו", "/about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">דלגו לתוכן הראשי</a>
      <div className="announcement">תעודת GIA או IGI לכל אבן מרכזית · פגישה בתיאום מראש</div>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-button mobile-only" type="button" onClick={() => setOpen(true)} aria-label="פתיחת תפריט" aria-expanded={open}>
            <MenuIcon />
          </button>
          <nav className="desktop-nav" aria-label="ניווט ראשי">
            {links.slice(0, 4).map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
          </nav>
          <Link className="brand" href="/" aria-label="LIBI Diamonds — דף הבית">
            <strong>LIBI</strong><span>DIAMONDS</span>
          </Link>
          <div className="header-actions">
            <Link className="icon-button" href="/diamond-search" aria-label="חיפוש יהלום"><SearchIcon /></Link>
            <a className="icon-button" href={SITE.phoneHref} aria-label={`התקשרו ל-${SITE.phoneDisplay}`}><PhoneIcon /></a>
          </div>
        </div>
      </header>
      <div className={`nav-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="nav-backdrop" type="button" aria-label="סגירת תפריט" onClick={() => setOpen(false)} />
        <nav className="nav-panel" aria-label="ניווט לנייד">
          <div className="nav-panel-head"><span>תפריט</span><button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="סגירת תפריט"><CloseIcon /></button></div>
          {links.map(([label, href]) => <Link key={href} href={href} tabIndex={open ? 0 : -1}>{label}</Link>)}
          <div className="nav-contact"><a href={SITE.phoneHref} dir="ltr">{SITE.phoneDisplay}</a><span>א׳–ה׳ 09:00–18:00</span></div>
        </nav>
      </div>
    </>
  );
}
