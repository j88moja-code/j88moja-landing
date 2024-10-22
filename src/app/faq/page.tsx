import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | J88Moja Systems",
  description: "Frequently Asked Questions",
  // other metadata
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
