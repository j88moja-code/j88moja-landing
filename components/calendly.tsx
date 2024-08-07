"use client";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";

// Custom components
import { Section, Container } from "@/components/craft";
import { Separator } from "./ui/separator";

const Calendly = () => {
  return (
    <Section id="calendly">
      <Container className="flex flex-col items-center gap-6">
        <h2 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">
          <Balancer>Book a Free Consultation Below:</Balancer>
        </h2>
        <div className="flex items-center justify-center">
          <Separator className="mt-3 bg-slate-100/20 h-0.5 w-80" />
        </div>
        <p className="!mb-0 text-muted-foreground">
          <Balancer>
            Schedule a free consultation with our team to discuss your needs.
            {/* <br />
            apologisies fo a bright ui even though you are on dark mode. */}
          </Balancer>
        </p>
        <InlineWidget
          url="https://calendly.com/ntobekos-j88moja/30min"
          styles={{
            height: "900px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            background: "none",
          }}
        />
      </Container>
    </Section>
  );
};

export default Calendly;