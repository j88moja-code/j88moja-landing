import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with J88Moja Systems about FibreMate for your pulp, paper or tissue mill.",
  alternates: { canonical: "/contact" },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Feel free to get in touch with us. We would love to hear from you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
