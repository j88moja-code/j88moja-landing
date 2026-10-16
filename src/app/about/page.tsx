import Founder from "@/components/Founder";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | J88Moja Systems",
  description: "About J88Moja Systems, the company behind FibreMate",
  // other metadata
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
