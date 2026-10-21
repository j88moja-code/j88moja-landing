import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import RequestADemo from "@/components/RequestADemo";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "See FibreMate on a live demo: shift production, downtime logging and reports for pulp and paper mills.",
  alternates: { canonical: "/request-a-demo" },
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
