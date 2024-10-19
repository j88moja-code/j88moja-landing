import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import TermsAndConditions from "@/components/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms and Conditions | J88Moja Systems",
  description: "This is Terms and Conditions for CMOOS Demo App Request",
  // other metadata
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Terms and Conditions for CMOOS Demo App Request"
      />
      <TermsAndConditions />
    </>
  );
};

export default TermsAndConditionsPage;
