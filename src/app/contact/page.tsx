import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | J88Moja Systems",
  description: "Get in touch with us. We would love to hear from you.",
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
