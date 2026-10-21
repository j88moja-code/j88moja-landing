import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import TermsAndConditions from "@/components/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "Terms and conditions for FibreMate demos and services from J88Moja Systems.",
  alternates: { canonical: "/terms-and-conditions" },
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Terms and Conditions for FibreMate Demo App Request"
      />
      <TermsAndConditions />
    </>
  );
};

export default TermsAndConditionsPage;
