import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | J88Moja Systems",
  description: "This is Privacy Policy Page for J88Moja Systems",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="At J88Moja Systems, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and safeguard your personal information."
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;
