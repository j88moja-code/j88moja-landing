"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CALCULATORS, type Calculator } from "@/lib/calculators";

type Category = Calculator["category"] | "All";

/**
 * Calculators overview: one tile per calculator with a clear "Open
 * calculator" button. The full calculator lives on its own page
 * (/calculators/<id>), which keeps this page short and gives each
 * calculator a page of its own for search.
 */
export default function Calculators() {
  const [category, setCategory] = useState<Category>("All");
  const categories: Category[] = [
    "All",
    ...Array.from(new Set(CALCULATORS.map((c) => c.category))),
  ];
  const shown = useMemo(
    () =>
      CALCULATORS.filter((c) => category === "All" || c.category === category),
    [category],
  );

  return (
    <section className="pb-16 pt-8 md:pb-20">
      <div className="container">
        <div
          role="tablist"
          aria-label="Calculator category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={
                category === c
                  ? "h-10 rounded-full bg-primary px-4 text-sm font-semibold text-white"
                  : "h-10 rounded-full border border-body-color/[.25] px-4 text-sm font-medium text-body-color hover:text-primary dark:border-white/[.2] dark:text-body-color-dark"
              }
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <li key={c.id}>
              <article className="flex h-full flex-col rounded-md border border-body-color/[.15] bg-white p-6 shadow-sm duration-300 hover:border-primary dark:border-white/[.15] dark:bg-gray-dark">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {c.category}
                </p>
                <h2 className="mt-2 text-xl font-bold text-black dark:text-white">
                  <Link
                    href={`/calculators/${c.id}`}
                    className="hover:text-primary"
                  >
                    {c.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-base text-body-color dark:text-body-color-dark">
                  {c.description}
                </p>
                <p className="mt-4 text-xs text-body-color dark:text-body-color-dark">
                  Inputs:{" "}
                  {c.fields.map((f) => f.label.toLowerCase()).join(", ")}
                </p>
                <Link
                  href={`/calculators/${c.id}`}
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-sm bg-primary px-5 text-base font-semibold text-white duration-300 hover:bg-primary/80"
                  aria-label={`Open the ${c.title} calculator`}
                >
                  Open calculator
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-md bg-primary/10 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Want these numbers from your real shifts?
            </h2>
            <p className="mt-1 text-body-color dark:text-body-color-dark">
              FibreMate logs every reel and stop, and works out production, OEE
              and lost time for you.
            </p>
          </div>
          <Link
            href="/#calendly"
            className="shrink-0 rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/80"
          >
            Book a 30-minute call
          </Link>
        </div>
      </div>
    </section>
  );
}
