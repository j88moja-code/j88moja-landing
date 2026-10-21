import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { CALCULATORS } from "@/lib/calculators";

/** Home page section linking to the free calculators. */
export default function CalculatorsTeaser() {
  return (
    <section id="calculators" className="py-16 md:py-20">
      <div className="container">
        <SectionTitle
          title="Free pulp and paper calculators"
          paragraph="The everyday sums of mill life, in one place. No sign-up, nothing to install."
          center
          mb="48px"
        />
        <ul className="mx-auto grid max-w-[1000px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CALCULATORS.map((c) => (
            <li key={c.id}>
              <Link
                href={`/calculators/${c.id}`}
                className="block h-full rounded-md border border-body-color/[.15] bg-white p-4 duration-300 hover:border-primary dark:border-white/[.15] dark:bg-gray-dark"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-body-color dark:text-body-color-dark">
                  {c.category}
                </p>
                <p className="mt-1 font-bold text-black dark:text-white">{c.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/calculators"
            className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-black/90 dark:bg-white/10"
          >
            Open the calculators
          </Link>
        </div>
      </div>
    </section>
  );
}
