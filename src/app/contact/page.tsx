import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | J88Moja Systems",
  description: "This is Contact for J88Moja Systems",
  // other metadata
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
