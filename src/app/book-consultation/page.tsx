import Breadcrumb from "@/components/Common/Breadcrumb";
import Calendly from "@/components/Calendly";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 30-minute call",
  description:
    "Book a free 30-minute call about logging shift production and downtime at your pulp, paper or tissue mill.",
  alternates: { canonical: "/book-consultation" },
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
