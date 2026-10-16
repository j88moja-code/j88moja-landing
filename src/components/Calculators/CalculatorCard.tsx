"use client";

import { useId, useState } from "react";
import { defaultsFor, formatResult, type Calculator } from "@/lib/calculators";

/**
 * One calculator on the public site. Same formulas as the FibreMate app
 * (src/lib/calculators.ts). Everything runs in the browser.
 */
export default function CalculatorCard({ calc }: { calc: Calculator }) {
  const id = useId();
  const initialRaw = () => Object.fromEntries(calc.fields.map((f) => [f.key, String(f.default)]));
  const [values, setValues] = useState<Record<string, number>>(() => defaultsFor(calc));
  const [raw, setRaw] = useState<Record<string, string>>(initialRaw);

  const setField = (key: string, text: string) => {
    setRaw((r) => ({ ...r, [key]: text }));
    const n = Number(text.replace(",", ".")); // accept a decimal comma too
    if (text.trim() !== "" && Number.isFinite(n)) setValues((v) => ({ ...v, [key]: n }));
  };

  const results = calc.compute(values);
  const primary = results.find((r) => r.primary) ?? results[0];
  const others = results.filter((r) => r !== primary);

  return (
    <article
      id={calc.id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 rounded-md border border-body-color/[.15] bg-white shadow-sm dark:border-white/[.15] dark:bg-gray-dark"
    >
      <header className="flex items-start gap-3 border-b border-body-color/[.15] p-5 dark:border-white/[.15]">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-body-color dark:text-body-color-dark">
            {calc.category}
          </p>
          <h3 id={`${id}-title`} className="text-xl font-bold text-black dark:text-white">
            {calc.title}
          </h3>
          <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">{calc.description}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setValues(defaultsFor(calc));
            setRaw(initialRaw());
          }}
          className="rounded-sm border border-body-color/[.2] px-3 py-2 text-sm font-medium text-body-color hover:text-primary dark:border-white/[.2] dark:text-body-color-dark"
        >
          Reset
        </button>
      </header>

      <div className="grid gap-5 p-5 md:grid-cols-2">
        <div className="space-y-3">
          {calc.fields.map((f) => (
            <div key={f.key}>
              <label htmlFor={`${id}-${f.key}`} className="text-sm font-medium text-black dark:text-white">
                {f.label}
              </label>
              <div className="mt-1 flex h-11 overflow-hidden rounded-sm border border-body-color/[.25] bg-[#f8f8f8] focus-within:border-primary dark:border-white/[.2] dark:bg-[#2C303B]">
                <input
                  id={`${id}-${f.key}`}
                  inputMode="decimal"
                  value={raw[f.key]}
                  onChange={(e) => setField(f.key, e.target.value)}
                  className="w-full min-w-0 bg-transparent px-3 text-base tabular-nums text-black outline-none dark:text-white"
                />
                <span className="flex items-center whitespace-nowrap border-l border-body-color/[.2] px-3 text-sm text-body-color dark:border-white/[.15] dark:text-body-color-dark">
                  {f.unit}
                </span>
              </div>
              {f.help && <p className="mt-1 text-xs text-body-color dark:text-body-color-dark">{f.help}</p>}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3" aria-live="polite">
          <div className="rounded-sm border-l-4 border-primary bg-primary/10 p-4">
            <p className="text-sm font-medium text-body-color dark:text-body-color-dark">{primary.label}</p>
            <p className="text-4xl font-bold tabular-nums text-black dark:text-white">
              {formatResult(primary)}
              <span className="ml-1.5 text-base font-medium text-body-color dark:text-body-color-dark">
                {primary.unit}
              </span>
            </p>
          </div>
          <dl className="divide-y divide-body-color/[.15] rounded-sm border border-body-color/[.15] dark:divide-white/[.1] dark:border-white/[.15]">
            {others.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between gap-3 px-3 py-2">
                <dt className="text-sm text-body-color dark:text-body-color-dark">{r.label}</dt>
                <dd className="whitespace-nowrap font-semibold tabular-nums text-black dark:text-white">
                  {formatResult(r)}{" "}
                  <span className="text-xs font-normal text-body-color dark:text-body-color-dark">{r.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
          <details className="text-xs text-body-color dark:text-body-color-dark">
            <summary className="cursor-pointer font-medium">How it&apos;s calculated</summary>
            <p className="mt-1">{calc.formula}</p>
          </details>
        </div>
      </div>
    </article>
  );
}
