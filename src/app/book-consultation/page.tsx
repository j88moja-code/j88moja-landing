import Breadcrumb from "@/components/Common/Breadcrumb";
import Calendly from "@/components/Calendly";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Consultation | J88Moja Systems",
  description: "Book a free consultation with us, we are ready to help",
  // other metadata
};

const BookConsultationPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Book A Consultation"
        description="Book A Consultation Now"
      />

      <Calendly />
    </>
  );
};

export default BookConsultationPage;
