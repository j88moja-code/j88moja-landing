/**
 * Search-friendly text for each calculator's own page (/calculators/<id>).
 * Titles use the words engineers actually search for; intros explain when
 * and why to use the calculator. Keys match the ids in calculators.ts.
 */
export const CALCULATOR_SEO: Record<string, { title: string; h1: string; description: string; intro: string[] }> = {
  "production-rate": {
    title: "Paper machine production rate calculator (t/h, t/day)",
    h1: "Paper machine production rate calculator",
    description:
      "Work out paper machine production in tonnes per hour, per shift and per day from reel speed, grammage, trim width and time efficiency. Free, no sign-up.",
    intro: [
      "Production rate is the first number anyone on a paper or tissue machine needs: it tells you what a grade change, a speed-up or a trim change is worth in tonnes.",
      "Enter the reel (pope) speed, grammage and trim width to get the gross rate, then the time efficiency to see what you can really expect per hour, per 12-hour shift and per day.",
    ],
  },
  reel: {
    title: "Paper reel weight and length calculator (from diameter and caliper)",
    h1: "Reel length and weight calculator",
    description:
      "Calculate the length and weight of paper on a reel or jumbo roll from its diameter, core or spool diameter, width, grammage and caliper. Free tool for paper and tissue mills.",
    intro: [
      "When a reel comes off the machine, its weight decides production figures and its length decides how many rolls it will convert into. This calculator works out both from measurements you can take on the floor.",
      "Use the wound caliper: tissue in particular is bulky, so a measured value gives a far better answer than a nominal one.",
    ],
  },
  consistency: {
    title: "Stock consistency and dilution water calculator",
    h1: "Consistency and dilution calculator",
    description:
      "Calculate the dilution water needed to bring pulp stock to a target consistency, and the dry fibre flow in tonnes per hour. Free calculator for stock preparation.",
    intro: [
      "Consistency control runs through the whole stock preparation system, from the pulper to the headbox. This calculator answers the everyday question: how much water do I add to get from this consistency to that one?",
      "It also gives the dry fibre flow, which links the stock system directly to machine production.",
    ],
  },
  "basis-weight": {
    title: "Grammage to basis weight converter (g/m² to lb), bulk and density",
    h1: "Basis weight, bulk and density calculator",
    description:
      "Convert grammage (g/m²) to imperial basis weights for tissue, newsprint, bond, text and cover grades, and calculate bulk and apparent density from caliper.",
    intro: [
      "Customers and specifications don't always use the same units. This converter turns grammage into the common imperial basis weights, each with its ream size, so there's no doubt which one you're quoting.",
      "Add the caliper to get bulk and apparent density, two of the properties that matter most for tissue softness and for printing and packaging grades.",
    ],
  },
  oee: {
    title: "OEE calculator for paper machines (availability, performance, quality)",
    h1: "OEE calculator from shift numbers",
    description:
      "Calculate OEE for a paper or tissue machine from the numbers on a shift report: planned time, downtime, ideal rate, total and saleable production.",
    intro: [
      "Overall Equipment Effectiveness (OEE) shows how much of a machine's potential output actually became saleable paper. World-class is often quoted at around 85%.",
      "Enter the figures from a shift report to see availability, performance and quality separately, so you know which loss to attack first.",
    ],
  },
  "downtime-cost": {
    title: "Downtime cost calculator: what does a machine stop cost?",
    h1: "Cost of a stop calculator",
    description:
      "Work out the tonnes and money lost when a paper machine stops, and the cost per minute of downtime. Useful for justifying repairs, spares and improvements.",
    intro: [
      "Every minute a paper machine is down has a price. Putting a rand value on a stop turns 'the pump trips sometimes' into a clear case for a repair or a spare.",
      "Use your contribution per tonne (selling price minus variable cost), not the selling price, so the number reflects what the mill really loses.",
    ],
  },
  "roll-speed": {
    title: "Roll surface speed calculator (diameter and RPM to m/min)",
    h1: "Roll surface speed calculator",
    description:
      "Calculate the surface speed of a roll, cylinder or Yankee dryer from its diameter and RPM, or the RPM needed for a target speed in m/min.",
    intro: [
      "Surface speed links rotational speed to machine speed. Use it to check drives, set a Yankee or roll to match the machine, or confirm a reading from the DCS.",
      "Enter a target speed as well to get the RPM needed to reach it.",
    ],
  },
  draw: {
    title: "Draw and crepe ratio calculator for paper and tissue machines",
    h1: "Draw and crepe ratio calculator",
    description:
      "Calculate the draw between two machine sections and the crepe ratio between the Yankee and the reel on a tissue machine.",
    intro: [
      "Draw is the speed difference between sections, and on a tissue machine the crepe ratio between the Yankee and the reel shapes stretch, bulk and softness.",
      "Enter the upstream and downstream speeds to get both, as percentages.",
    ],
  },
};
