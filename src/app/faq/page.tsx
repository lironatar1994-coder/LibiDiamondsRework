import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/content";

export const metadata: Metadata = { title: "שאלות נפוצות על יהלומים ותכשיטים", description: "תשובות קצרות על יהלומי מעבדה וטבעיים, תעודות, מחירים, זמני הכנה, מידות ופגישות.", alternates: { canonical: "/faq" } };
export default function FaqPage() { const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; return <><JsonLd data={schema} /><div className="simple-page faq-page"><header><h1>שאלות נפוצות</h1><p>התשובות הקצרות לדברים שכדאי לדעת לפני שמתחילים.</p></header><section>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section></div></>; }
