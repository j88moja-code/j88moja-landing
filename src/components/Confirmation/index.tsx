"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import SectionTitle from "../Common/SectionTitle";

const Confirmation = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("approved");

  useEffect(() => {
    if (status === "true") {
      toast.success("You have successfully confirmed the request.");
    } else {
      toast.error("There was an issue with your confirmation.");
    }
  }, [status]);

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <SectionTitle
          title="Thank you for your request"
          paragraph="We will get back to you shortly."
          center
        />
      </div>
    </section>
  );
};

export default Confirmation;
