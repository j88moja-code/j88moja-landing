/**
 * FibreMate pulp and paper calculators.
 *
 * Plain TypeScript with no UI code, so the same file is used by the app
 * (frontend/src/lib/calculators.ts) and the public website
 * (src/lib/calculators.ts). Keep the two copies identical.
 *
 * Each calculator lists its inputs (with defaults that give a sensible
 * example) and a compute() that turns them into results. Units are metric,
 * as used in South African mills.
 */

export type Field = {
  key: string;
  label: string;
  unit: string;
  default: number;
  min?: number;
  step?: number;
  /** short hint shown under the input */
  help?: string;
};

export type Result = {
  label: string;
  value: number | null;
  unit: string;
  digits?: number;
  /** the main answer, shown largest */
  primary?: boolean;
};

export type Calculator = {
  id: string;
  title: string;
  category: "Production" | "Stock & fibre" | "Paper properties" | "Performance" | "Machine";
  description: string;
  fields: Field[];
  compute: (v: Record<string, number>) => Result[];
  /** the formula in words, shown under the results */
  formula: string;
};

const ok = (n: number) => (Number.isFinite(n) ? n : null);
const pct = (n: number) => n / 100;

export const CALCULATORS: Calculator[] = [
  {
    id: "production-rate",
    title: "Production rate",
    category: "Production",
    description: "Tonnes per hour, day and shift from machine speed, grammage and trim width.",
    fields: [
      { key: "speed", label: "Reel (pope) speed", unit: "m/min", default: 1250, min: 0 },
      { key: "gsm", label: "Grammage", unit: "g/m²", default: 17, min: 0, step: 0.1 },
      { key: "width", label: "Trim width", unit: "mm", default: 2700, min: 0 },
      { key: "eff", label: "Time efficiency", unit: "%", default: 92, min: 0, step: 0.5, help: "Share of time actually producing saleable paper" },
    ],
    compute: ({ speed, gsm, width, eff }) => {
      const gross = (speed * gsm * (width / 1000) * 60) / 1_000_000; // t/h
      const net = gross * pct(eff);
      return [
        { label: "Net rate", value: ok(net), unit: "t/h", digits: 2, primary: true },
        { label: "Gross rate (100% time)", value: ok(gross), unit: "t/h", digits: 2 },
        { label: "Per 12-hour shift", value: ok(net * 12), unit: "t", digits: 1 },
        { label: "Per day", value: ok(net * 24), unit: "t", digits: 1 },
      ];
    },
    formula: "t/h = speed (m/min) × grammage (g/m²) × width (m) × 60 ÷ 1 000 000, then × time efficiency.",
  },
  {
    id: "reel",
    title: "Reel length and weight",
    category: "Production",
    description: "Paper length and weight on a reel from its diameter, core, width and caliper.",
    fields: [
      { key: "od", label: "Reel diameter", unit: "mm", default: 2500, min: 0 },
      { key: "core", label: "Spool or core diameter", unit: "mm", default: 600, min: 0 },
      { key: "width", label: "Reel width", unit: "mm", default: 2700, min: 0 },
      { key: "gsm", label: "Grammage", unit: "g/m²", default: 17, min: 0, step: 0.1 },
      { key: "caliper", label: "Caliper (thickness)", unit: "µm", default: 120, min: 1, help: "Wound caliper; tissue is bulky, so use the measured value" },
    ],
    compute: ({ od, core, width, gsm, caliper }) => {
      const D = od / 1000;
      const d = core / 1000;
      const t = caliper / 1_000_000;
      const length = (Math.PI * (D * D - d * d)) / (4 * t); // m
      const kg = (length * (width / 1000) * gsm) / 1000;
      return [
        { label: "Reel weight", value: ok(kg / 1000), unit: "t", digits: 2, primary: true },
        { label: "Paper length", value: ok(length / 1000), unit: "km", digits: 1 },
        { label: "Weight", value: ok(kg), unit: "kg", digits: 0 },
      ];
    },
    formula: "Length = π × (D² − d²) ÷ (4 × caliper); weight = length × width × grammage.",
  },
  {
    id: "consistency",
    title: "Consistency and dilution",
    category: "Stock & fibre",
    description: "Dry fibre flow, and the water needed to dilute stock to a target consistency.",
    fields: [
      { key: "flow", label: "Stock flow", unit: "L/min", default: 3000, min: 0 },
      { key: "c1", label: "Current consistency", unit: "%", default: 3.5, min: 0, step: 0.05 },
      { key: "c2", label: "Target consistency", unit: "%", default: 0.8, min: 0.01, step: 0.05 },
    ],
    compute: ({ flow, c1, c2 }) => {
      // stock density taken as 1 kg/L, accurate enough below ~5% consistency
      const fibre = (flow * pct(c1) * 60) / 1000; // t/h dry fibre
      const water = c2 < c1 ? flow * (c1 / c2 - 1) : 0;
      return [
        { label: "Dilution water to add", value: ok(water), unit: "L/min", digits: 0, primary: true },
        { label: "Flow after dilution", value: ok(flow + water), unit: "L/min", digits: 0 },
        { label: "Dry fibre flow", value: ok(fibre), unit: "t/h", digits: 2 },
      ];
    },
    formula: "Fibre = flow × consistency. Water to add = flow × (current ÷ target − 1). Stock density taken as 1 kg/L.",
  },
  {
    id: "basis-weight",
    title: "Basis weight, bulk and density",
    category: "Paper properties",
    description: "Convert grammage to imperial basis weights, and work out bulk and density from caliper.",
    fields: [
      { key: "gsm", label: "Grammage", unit: "g/m²", default: 80, min: 0, step: 0.1 },
      { key: "caliper", label: "Caliper", unit: "µm", default: 100, min: 1 },
    ],
    compute: ({ gsm, caliper }) => [
      { label: "Bulk", value: ok(caliper / gsm), unit: "cm³/g", digits: 2, primary: true },
      { label: "Apparent density", value: ok((gsm / caliper) * 1000), unit: "kg/m³", digits: 0 },
      { label: "Tissue / newsprint / kraft (3000 ft²)", value: ok(gsm * 0.6143), unit: "lb", digits: 1 },
      { label: "Bond / writing (17 × 22, 500 sheets)", value: ok(gsm * 0.2661), unit: "lb", digits: 1 },
      { label: "Text / book (25 × 38, 500 sheets)", value: ok(gsm * 0.6757), unit: "lb", digits: 1 },
      { label: "Cover (20 × 26, 500 sheets)", value: ok(gsm * 0.3697), unit: "lb", digits: 1 },
    ],
    formula: "Bulk = caliper ÷ grammage. Density = grammage ÷ caliper. Imperial basis weight = grammage × ream area ÷ 453.6 g/lb.",
  },
  {
    id: "oee",
    title: "OEE from shift numbers",
    category: "Performance",
    description: "Availability, performance, quality and OEE from the figures on a shift report.",
    fields: [
      { key: "planned", label: "Planned production time", unit: "min", default: 720, min: 1 },
      { key: "down", label: "Downtime", unit: "min", default: 65, min: 0 },
      { key: "ideal", label: "Ideal (planned) rate", unit: "t/h", default: 3.4, min: 0.01, step: 0.1 },
      { key: "made", label: "Total produced", unit: "t", default: 34, min: 0, step: 0.1 },
      { key: "good", label: "Saleable produced", unit: "t", default: 33.2, min: 0, step: 0.1 },
    ],
    compute: ({ planned, down, ideal, made, good }) => {
      const run = Math.max(0, planned - down);
      const A = run / planned;
      const P = run > 0 ? made / (ideal * (run / 60)) : 0;
      const Q = made > 0 ? good / made : 0;
      return [
        { label: "OEE", value: ok(A * P * Q * 100), unit: "%", digits: 1, primary: true },
        { label: "Availability", value: ok(A * 100), unit: "%", digits: 1 },
        { label: "Performance", value: ok(P * 100), unit: "%", digits: 1 },
        { label: "Quality", value: ok(Q * 100), unit: "%", digits: 1 },
      ];
    },
    formula: "Availability = run time ÷ planned time. Performance = produced ÷ (ideal rate × run time). Quality = saleable ÷ produced. OEE = A × P × Q.",
  },
  {
    id: "downtime-cost",
    title: "Cost of a stop",
    category: "Performance",
    description: "Tonnes and money lost while the machine is down, to help justify a repair or spare.",
    fields: [
      { key: "rate", label: "Machine rate", unit: "t/h", default: 3.4, min: 0, step: 0.1 },
      { key: "minutes", label: "Stop duration", unit: "min", default: 45, min: 0 },
      { key: "margin", label: "Contribution per tonne", unit: "R/t", default: 4500, min: 0, help: "Selling price minus variable cost per tonne" },
      { key: "extra", label: "Repair and other costs", unit: "R", default: 0, min: 0 },
    ],
    compute: ({ rate, minutes, margin, extra }) => {
      const tonnes = (rate * minutes) / 60;
      const cost = tonnes * margin + extra;
      return [
        { label: "Cost of this stop", value: ok(cost), unit: "R", digits: 0, primary: true },
        { label: "Production lost", value: ok(tonnes), unit: "t", digits: 2 },
        { label: "Cost per minute down", value: ok(minutes > 0 ? cost / minutes : rate / 60 * margin), unit: "R/min", digits: 0 },
      ];
    },
    formula: "Lost tonnes = rate × minutes ÷ 60. Cost = lost tonnes × contribution per tonne + repair costs.",
  },
  {
    id: "roll-speed",
    title: "Roll surface speed",
    category: "Machine",
    description: "Surface speed of a roll or cylinder from its diameter and RPM, or the RPM for a target speed.",
    fields: [
      { key: "dia", label: "Roll diameter", unit: "mm", default: 4572, min: 1, help: "e.g. a 15 ft Yankee is 4572 mm" },
      { key: "rpm", label: "Rotational speed", unit: "rpm", default: 104, min: 0, step: 0.1 },
      { key: "target", label: "Target surface speed", unit: "m/min", default: 1500, min: 0 },
    ],
    compute: ({ dia, rpm, target }) => {
      const circ = Math.PI * (dia / 1000);
      return [
        { label: "Surface speed", value: ok(circ * rpm), unit: "m/min", digits: 0, primary: true },
        { label: "RPM for target speed", value: ok(target / circ), unit: "rpm", digits: 1 },
        { label: "Circumference", value: ok(circ), unit: "m", digits: 3 },
      ];
    },
    formula: "Surface speed = π × diameter × RPM.",
  },
  {
    id: "draw",
    title: "Draw between sections",
    category: "Machine",
    description: "Speed difference (draw) between two sections, e.g. Yankee to reel for crepe.",
    fields: [
      { key: "v1", label: "Upstream speed", unit: "m/min", default: 1500, min: 0.01, help: "e.g. Yankee" },
      { key: "v2", label: "Downstream speed", unit: "m/min", default: 1250, min: 0, help: "e.g. pope reel" },
    ],
    compute: ({ v1, v2 }) => {
      const draw = ((v2 - v1) / v1) * 100;
      return [
        { label: "Draw", value: ok(draw), unit: "%", digits: 2, primary: true },
        { label: "Crepe ratio (if negative draw)", value: ok(v2 < v1 ? ((v1 - v2) / v2) * 100 : 0), unit: "%", digits: 1 },
        { label: "Speed difference", value: ok(v2 - v1), unit: "m/min", digits: 0 },
      ];
    },
    formula: "Draw = (downstream − upstream) ÷ upstream. Crepe ratio = (Yankee − reel) ÷ reel.",
  },
];

/** Format a result for display, with thousands separators. */
export function formatResult(r: Result): string {
  if (r.value === null) return "–";
  return r.value.toLocaleString("en-GB", {
    minimumFractionDigits: r.digits ?? 2,
    maximumFractionDigits: r.digits ?? 2,
  });
}

export function defaultsFor(calc: Calculator): Record<string, number> {
  return Object.fromEntries(calc.fields.map((f) => [f.key, f.default]));
}
