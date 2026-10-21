import Founder from "@/components/Founder";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "FibreMate is built by J88Moja Systems, founded by a production lead with 15 years in tissue manufacturing.",
  alternates: { canonical: "/about" },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="J88Moja Systems builds FibreMate, shift production, downtime and calculators for pulp and paper mills, founded by a production lead with 15 years in tissue manufacturing."
      />
      <Founder />
    </>
  );
};

export default AboutPage;
