import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | J88Moja Systems",
  description: "This is About Page for J88Moja Systems",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="J88Moja Systems is dedicated to driving continuous improvement by developing innovative systems that streamline processes and empower data-driven decision-making. Our forward-thinking approach ensures that businesses operations can harness the full potential of their data to stay ahead in an ever-evolving landscape."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
