export type CategorySlug = "engagement-rings" | "earrings" | "necklaces" | "bracelets";
export type Metal = "white" | "yellow" | "rose";

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: CategorySlug;
  subtitle: string;
  description: string;
  priceFrom: number;
  image: string;
  gallery: { src: string; alt: string }[];
  metals: Metal[];
  carats: { label: string; price: number }[];
  sizes?: string[];
  specs: { label: string; value: string }[];
  featured?: boolean;
}

export const categories = [
  {
    slug: "engagement-rings" as const,
    name: "טבעות אירוסין",
    description: "סוליטר, היילו ושלוש אבנים — בזהב 18K ובבחירת יהלום שמתאימה לכם.",
    image: "/images/design/categories/engagement-01.jpg",
  },
  {
    slug: "earrings" as const,
    name: "עגילי יהלום",
    description: "עגילי סטאד מדויקים ליום־יום, עם זוג יהלומים תואם.",
    image: "/images/design/categories/earrings-01.jpg",
  },
  {
    slug: "necklaces" as const,
    name: "שרשראות ותליונים",
    description: "תליוני יהלום נקיים ושרשראות שמניחות את האור בדיוק במקום.",
    image: "/images/design/categories/pendants-01.jpg",
  },
  {
    slug: "bracelets" as const,
    name: "צמידי טניס",
    description: "רצף מדויק של יהלומים, מותאם לאורך היד ולמשקל הרצוי.",
    image: "/images/design/categories/tennis-01.jpg",
  },
] as const;

const ringGallery = [
  { src: "/images/design/products/clean/ring-01-front.jpg", alt: "טבעת סוליטר מלפנים על רקע לבן" },
  { src: "/images/design/products/clean/ring-01-profile.jpg", alt: "פרופיל צד של בית היהלום" },
  { src: "/images/design/products/clean/ring-01-top.jpg", alt: "הטבעת במבט על" },
  { src: "/images/design/products/clean/ring-01-scale.jpg", alt: "הטבעת לצד מטבע להמחשת קנה מידה" },
];

const commonRingSpecs = [
  { label: "מתכת", value: "זהב 18K" },
  { label: "צבע היהלום", value: "E–F" },
  { label: "ניקיון", value: "VS1–VS2" },
  { label: "חיתוך", value: "Excellent" },
  { label: "דוח", value: "IGI לפי האבן הנבחרת" },
];

export const products: Product[] = [
  {
    slug: "libi-round-solitaire",
    name: "טבעת אירוסין סוליטר ״ליבי״",
    shortName: "סוליטר ליבי",
    category: "engagement-rings",
    subtitle: "יהלום עגול · ארבע שיניים · זהב 18K",
    description: "סוליטר נקי עם סל פתוח שמכניס אור מכל צד וחישוק דק ונוח לענידה. כל טבעת מיוצרת לפי המידה ומותאמת ליהלום שנבחר.",
    priceFrom: 6500,
    image: ringGallery[0].src,
    gallery: ringGallery,
    metals: ["white", "yellow", "rose"],
    carats: [{ label: "0.70", price: 6500 }, { label: "1.00", price: 7900 }, { label: "1.50", price: 10400 }, { label: "2.00", price: 13600 }],
    sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
    specs: commonRingSpecs,
    featured: true,
  },
  {
    slug: "noa-pave-solitaire",
    name: "טבעת פאווה ״נועה״",
    shortName: "פאווה נועה",
    category: "engagement-rings",
    subtitle: "יהלום עגול · פאווה עדין · זהב 18K",
    description: "שורת פאווה דקה מאירה את הכתפיים בלי להתחרות באבן המרכזית. גב החישוק נשאר חלק להתאמת מידה נוחה.",
    priceFrom: 7400,
    image: "/images/design/products/clean/ring-02-front.jpg",
    gallery: [{ src: "/images/design/products/clean/ring-02-front.jpg", alt: "טבעת פאווה נועה על רקע לבן" }, ...ringGallery.slice(1)],
    metals: ["white", "yellow"],
    carats: [{ label: "0.70", price: 7400 }, { label: "1.00", price: 8900 }, { label: "1.50", price: 11800 }],
    sizes: ["46", "48", "50", "52", "54", "56", "58"],
    specs: commonRingSpecs,
    featured: true,
  },
  {
    slug: "trio-three-stone-ring",
    name: "טבעת שלוש אבנים ״טריו״",
    shortName: "שלוש אבנים טריו",
    category: "engagement-rings",
    subtitle: "שלושה יהלומים · פרופורציות מאוזנות",
    description: "אבן מרכזית ושתי אבני צד שנבחרות כסט אחד. הסלים מחוברים בקו נמוך כדי ליצור חזית רציפה ונוחה.",
    priceFrom: 10200,
    image: "/images/design/products/clean/ring-03-front.jpg",
    gallery: [{ src: "/images/design/products/clean/ring-03-front.jpg", alt: "טבעת שלוש אבנים טריו" }, ...ringGallery.slice(1)],
    metals: ["white", "yellow"],
    carats: [{ label: "1.00", price: 10200 }, { label: "1.50", price: 13400 }, { label: "2.00", price: 16900 }],
    sizes: ["46", "48", "50", "52", "54", "56", "58"],
    specs: commonRingSpecs,
    featured: true,
  },
  {
    slug: "alma-rose-solitaire",
    name: "טבעת סוליטר ״אלמה״",
    shortName: "סוליטר אלמה",
    category: "engagement-rings",
    subtitle: "יהלום עגול · זהב אדום 18K",
    description: "חישוק זהב אדום מלוטש וסל עדין בארבע שיניים. גוון המתכת מדגיש את הברק הלבן של האבן.",
    priceFrom: 6900,
    image: "/images/design/products/clean/ring-04-front.jpg",
    gallery: [{ src: "/images/design/products/clean/ring-04-front.jpg", alt: "טבעת אלמה בזהב אדום" }, ...ringGallery.slice(1)],
    metals: ["rose", "white", "yellow"],
    carats: [{ label: "0.70", price: 6900 }, { label: "1.00", price: 8300 }, { label: "1.50", price: 10900 }],
    sizes: ["46", "48", "50", "52", "54", "56", "58"],
    specs: commonRingSpecs,
  },
  {
    slug: "luna-diamond-studs",
    name: "עגילי יהלום ״לונה״",
    shortName: "סטאד לונה",
    category: "earrings",
    subtitle: "זוג יהלומים עגולים · ארבע שיניים",
    description: "זוג יהלומים שנבחר בהתאמה של קוטר, צבע וניקיון. סל נמוך וסוגר הברגה לשימוש יומיומי בטוח.",
    priceFrom: 3900,
    image: "/images/design/products/studs-01-front.jpg",
    gallery: [{ src: "/images/design/products/studs-01-front.jpg", alt: "זוג עגילי יהלום לונה" }],
    metals: ["white", "yellow"],
    carats: [{ label: "0.50", price: 3900 }, { label: "1.00", price: 6200 }, { label: "1.50", price: 8900 }],
    specs: commonRingSpecs,
    featured: true,
  },
  {
    slug: "or-solitaire-pendant",
    name: "תליון יהלום ״אור״",
    shortName: "תליון אור",
    category: "necklaces",
    subtitle: "יהלום עגול · שרשרת זהב 18K",
    description: "יהלום עגול בסל פתוח ושרשרת עדינה עם שתי נקודות אורך. התליון נשאר ישר ומחזיר אור מכל זווית.",
    priceFrom: 3400,
    image: "/images/design/products/pendant-01-front.jpg",
    gallery: [{ src: "/images/design/products/pendant-01-front.jpg", alt: "תליון יהלום אור" }],
    metals: ["white", "yellow"],
    carats: [{ label: "0.30", price: 3400 }, { label: "0.50", price: 4900 }, { label: "1.00", price: 7900 }],
    specs: commonRingSpecs,
    featured: true,
  },
  {
    slug: "riviera-tennis-bracelet",
    name: "צמיד טניס ״ריביירה״",
    shortName: "צמיד ריביירה",
    category: "bracelets",
    subtitle: "קו יהלומים רציף · סוגר כפול",
    description: "יהלומים עגולים תואמים בשיבוץ ארבע שיניים, עם חוליות גמישות וסוגר מאובטח. מיוצר לפי אורך היד.",
    priceFrom: 8900,
    image: "/images/design/products/tennis-01-front.jpg",
    gallery: [{ src: "/images/design/products/tennis-01-front.jpg", alt: "צמיד טניס ריביירה" }],
    metals: ["white", "yellow"],
    carats: [{ label: "3.00", price: 8900 }, { label: "5.00", price: 13900 }, { label: "7.00", price: 18900 }],
    specs: commonRingSpecs,
    featured: true,
  },
];

export const categoryBySlug = (slug: string) => categories.find((category) => category.slug === slug);
export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const productsByCategory = (slug: string) => products.filter((product) => product.category === slug);

export const metalNames: Record<Metal, string> = {
  white: "זהב לבן",
  yellow: "זהב צהוב",
  rose: "זהב אדום",
};
