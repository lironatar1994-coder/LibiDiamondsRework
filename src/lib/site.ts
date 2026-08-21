export const SITE = {
  name: "LIBI Diamonds",
  domain: "www.libidiamonds.co.il",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.libidiamonds.co.il",
  phoneDisplay: "050-861-1888",
  phoneHref: "tel:+972508611888",
  whatsappNumber: "972508611888",
  email: "info@libidiamonds.co.il",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
    maximumFractionDigits: 0,
  }).format(price);
}

export function absoluteUrl(path = "") {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
