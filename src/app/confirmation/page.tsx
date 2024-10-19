import Breadcrumb from "@/components/Common/Breadcrumb";
import Confirmation from "@/components/Confirmation";
import { Suspense } from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirmation | J88Moja Systems",
  description: "Confirmation after successful CMOOS Demo App Request",
  // other metadata
};

const ConfirmationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Confirmation"
        description="Thank you for your request. We will get back to you shortly."
      />
      <Suspense
        fallback={
          <div className="animate-pulse">
            <div className="mb-4 h-8 w-1/3 rounded bg-gray-300"></div>
            <div className="mb-2 h-4 w-2/3 rounded bg-gray-200"></div>
            <div className="h-4 w-1/2 rounded bg-gray-200"></div>
          </div>
        }
      >
        <Confirmation />
      </Suspense>
    </>
  );
};

export default ConfirmationPage;
