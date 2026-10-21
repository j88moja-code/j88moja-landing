import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CalculatorCard from "@/components/Calculators/CalculatorCard";
import { CALCULATORS } from "@/lib/calculators";
import { CALCULATOR_SEO } from "@/lib/calculatorSeo";
import { SITE_URL } from "@/lib/site";

/**
 * One page per calculator (/calculators/production-rate, ...), so each can
 * rank for its own search, e.g. "paper machine production rate calculator".
 * Pages are built at deploy time (static), so they load fast.
 */

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return CALCULATORS.map((c) => ({ id: c.id }));
}

export const dynamicParams = false; // unknown ids give a 404

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const seo = CALCULATOR_SEO[id];
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/calculators/${id}` },
    openGraph: { title: seo.title, description: seo.description, url: `/calculators/${id}` },
  };
}

export default async function CalculatorPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const calc = CALCULATORS.find((c) => c.id === id);
  const seo = CALCULATOR_SEO[id];
  if (!calc || !seo) notFound();

  const related = CALCULATORS.filter((c) => c.id !== id).slice(0, 4);

  // Structured data: a free web tool, plus the breadcrumb trail for search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: seo.h1,
        url: `${SITE_URL}/calculators/${id}`,
        description: seo.description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web browser",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "ZAR" },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
          { "@type": "ListItem", position: 3, name: seo.h1, item: `${SITE_URL}/calculators/${id}` },
        ],
      },
    ],
  };

  return (
    <section className="pb-16 pt-28 md:pb-20 md:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-body-color dark:text-body-color-dark">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators" className="hover:text-primary">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-black dark:text-white">{seo.h1}</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">{seo.h1}</h1>
        <div className="mb-8 max-w-[760px] space-y-3 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {seo.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* pass the id only; the card looks up the formula in the browser */}
        <CalculatorCard calcId={calc.id} />

        <h2 className="mb-4 mt-12 text-xl font-bold text-black dark:text-white">More pulp and paper calculators</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((c) => (
            <li key={c.id}>
              <Link
                href={`/calculators/${c.id}`}
                className="block h-full rounded-md border border-body-color/[.15] bg-white p-4 duration-300 hover:border-primary dark:border-white/[.15] dark:bg-gray-dark"
              >
                <p className="font-bold text-black dark:text-white">{c.title}</p>
                <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">{c.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-md bg-primary/10 p-8">
          <h2 className="text-2xl font-bold text-black dark:text-white">Get these numbers from every shift, automatically</h2>
          <p className="mt-2 text-body-color dark:text-body-color-dark">
            FibreMate logs reels and stops as the shift runs and works out production, OEE and lost time for you.
          </p>
          <Link
            href="/#calendly"
            className="mt-5 inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/80"
          >
            Book a 30-minute call
          </Link>
        </div>
      </div>
    </section>
  );
}
