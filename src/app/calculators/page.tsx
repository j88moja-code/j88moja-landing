import Breadcrumb from "@/components/Common/Breadcrumb";
import Calculators from "@/components/Calculators";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulp and paper calculators | FibreMate",
  description:
    "Free pulp and paper calculators: production rate, reel length and weight, consistency and dilution, basis weight and bulk, OEE, cost of a stop, roll speed and draw.",
};

export default function CalculatorsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Pulp and paper calculators"
        description="Free calculators for paper and tissue makers: production rate, reel weight, consistency, basis weight, OEE, cost of a stop, roll speed and draw. Everything runs in your browser."
      />
      <Calculators />
    </>
  );
}
