import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "LIBI Diamonds", short_name: "LIBI", description: "תכשיטי יהלומים בהתאמה אישית", start_url: "/", display: "standalone", background_color: "#fcfcfa", theme_color: "#032f35", lang: "he", dir: "rtl", icons: [] }; }
