import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("./site/", import.meta.url)));
const PORT = Number(process.env.PORT || 3105);
const SITE = "https://www.libidiamonds.co.il";

const pages = {
  "/": {
    file: "LibiDiamonds Mobile Home v4.dc.html",
    title: "LIBI Diamonds | תכשיטי יהלומים",
    description: "יהלומים ותכשיטי יהלומים בעיצוב מדויק, עם ליווי אישי וחיפוש יהלום לפי הצרכים שלכם."
  },
  "/collections/engagement-rings": {
    file: "LibiDiamonds Engagement Rings.dc.html",
    title: "טבעות אירוסין | LIBI Diamonds",
    description: "קולקציית טבעות אירוסין ויהלומים בעיצוב נקי ומדויק."
  },
  "/product/libi-round-solitaire": {
    file: "LibiDiamonds Product Page.dc.html",
    title: "טבעת אירוסין סוליטר | LIBI Diamonds",
    description: "טבעת אירוסין סוליטר בזהב 18K עם בחירת יהלום ומפרט אישי."
  },
  "/diamond-search": {
    file: "LibiDiamonds Diamond Search.dc.html",
    title: "חיפוש יהלום | LIBI Diamonds",
    description: "חיפוש יהלום לפי צורה, משקל, תקציב והעדפות אישיות."
  },
  "/faq": {
    file: "LibiDiamonds FAQ.dc.html",
    title: "שאלות נפוצות | LIBI Diamonds",
    description: "תשובות לשאלות נפוצות על יהלומים, תכשיטים, משלוחים ואחריות."
  },
  "/contact": {
    file: "LibiDiamonds Contact.dc.html",
    title: "יצירת קשר | LIBI Diamonds",
    description: "צרו קשר עם LIBI Diamonds וקבעו פגישת ייעוץ אישית."
  }
};

const legacyPages = {
  "/LibiDiamonds Mobile Home v2.dc.html": "LibiDiamonds Mobile Home v2.dc.html",
  "/LibiDiamonds Mobile Home v3.dc.html": "LibiDiamonds Mobile Home v3.dc.html",
  "/LibiDiamonds Mobile Home v4.dc.html": "LibiDiamonds Mobile Home v4.dc.html",
  "/LibiDiamonds Engagement Rings.dc.html": "LibiDiamonds Engagement Rings.dc.html",
  "/LibiDiamonds Product Page.dc.html": "LibiDiamonds Product Page.dc.html",
  "/LibiDiamonds Diamond Search.dc.html": "LibiDiamonds Diamond Search.dc.html",
  "/LibiDiamonds FAQ.dc.html": "LibiDiamonds FAQ.dc.html",
  "/LibiDiamonds Contact.dc.html": "LibiDiamonds Contact.dc.html"
};

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function headers(type, cache = "no-cache") {
  return {
    "Content-Type": type,
    "Cache-Control": cache,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy": "default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://unpkg.com data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self' https://unpkg.com; frame-ancestors 'self'"
  };
}

function metadata(page, pathname) {
  const canonical = `${SITE}${pathname === "/" ? "/" : pathname}`;
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": pathname.startsWith("/product/") ? "Product" : "WebPage",
    name: page.title,
    description: page.description,
    url: canonical,
    inLanguage: "he-IL",
    ...(pathname.startsWith("/product/") ? { brand: { "@type": "Brand", name: "LIBI Diamonds" } } : {})
  }).replace(/</g, "\\u003c");
  return `<base href="/">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:locale" content="he_IL">
<meta property="og:site_name" content="LIBI Diamonds">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}/images/home/hero-01.jpg">
<script type="application/ld+json">${schema}</script>`;
}

function sendHtml(res, page, pathname) {
  const source = readFileSync(join(ROOT, page.file), "utf8");
  const html = source.replace("<head>", `<head>\n${metadata(page, pathname)}`);
  res.writeHead(200, headers("text/html; charset=utf-8"));
  res.end(html);
}

function sendFile(res, pathname) {
  const relative = normalize(pathname).replace(/^([/\\])+/, "");
  const file = resolve(ROOT, relative);
  if (!file.startsWith(`${ROOT}\\`) && !file.startsWith(`${ROOT}/`)) return false;
  if (!existsSync(file) || !statSync(file).isFile()) return false;
  const type = mime[extname(file).toLowerCase()] || "application/octet-stream";
  const cache = /\.(jpg|jpeg|png|webp|svg)$/i.test(file) ? "public, max-age=31536000, immutable" : "public, max-age=3600";
  res.writeHead(200, headers(type, cache));
  createReadStream(file).pipe(res);
  return true;
}

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = url.pathname; }

  if (pathname === "/health") {
    res.writeHead(200, headers("application/json; charset=utf-8", "no-store"));
    return res.end(JSON.stringify({ status: "ok", design: "claude-download" }));
  }
  if (pathname === "/robots.txt") {
    res.writeHead(200, headers("text/plain; charset=utf-8", "public, max-age=3600"));
    return res.end(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
  }
  if (pathname === "/sitemap.xml") {
    const urls = Object.keys(pages).map((path) => `<url><loc>${SITE}${path === "/" ? "/" : path}</loc></url>`).join("");
    res.writeHead(200, headers("application/xml; charset=utf-8", "public, max-age=3600"));
    return res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
  }
  if (pathname === "/favicon.ico") { res.writeHead(204); return res.end(); }
  if (pages[pathname]) return sendHtml(res, pages[pathname], pathname);
  if (legacyPages[pathname]) return sendHtml(res, { ...pages["/"], file: legacyPages[pathname] }, "/");
  if (sendFile(res, pathname)) return;

  res.writeHead(404, headers("text/html; charset=utf-8"));
  res.end("<!doctype html><html lang=\"he\" dir=\"rtl\"><meta charset=\"utf-8\"><title>העמוד לא נמצא</title><body><h1>העמוד לא נמצא</h1><a href=\"/\">חזרה לדף הבית</a></body></html>");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`LIBI Claude design listening on ${PORT}`);
});
