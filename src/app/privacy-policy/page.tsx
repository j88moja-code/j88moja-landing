import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How J88Moja Systems collects, uses and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
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
