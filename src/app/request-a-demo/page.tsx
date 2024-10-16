import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import RequestADemo from "@/components/RequestADemo";

export const metadata: Metadata = {
  title: "Request A Demo | J88Moja Systems",
  description: "This a request demo page for JCMOOS",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Request A Demo" description="Request A Demo Now" />
      <RequestADemo />
    </>
  );
};

export default SignupPage;
