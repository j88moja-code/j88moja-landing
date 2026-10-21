import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about FibreMate: who it is for, setup time, pilot pricing, data protection under POPIA and the free calculators.",
  alternates: { canonical: "/faq" },
};

const FAQPage = () => {
  return (
    <>
      <Breadcrumb pageName="FAQ" description="Frequently Asked Questions" />
      <FAQ />
    </>
  );
};

export default FAQPage;
