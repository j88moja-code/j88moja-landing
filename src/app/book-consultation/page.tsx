import Breadcrumb from "@/components/Common/Breadcrumb";
import Calendly from "@/components/Calendly";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Consultation | J88Moja Systems",
  description: "This is Book A Consultation Page for J88Moja Systems",
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
