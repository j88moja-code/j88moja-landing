import Breadcrumb from "@/components/Common/Breadcrumb";
import CookiePolicy from "@/components/CookiePolicy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "How the J88Moja Systems website uses cookies.",
  alternates: { canonical: "/cookie-policy" },
};

const CookiePolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cookie Policy"
        description="We and our service providers use cookies to enhance your experience on our website. By continuing to use our website, you consent to the use of cookies."
      />
      <CookiePolicy />
    </>
  );
};

export default CookiePolicyPage;
