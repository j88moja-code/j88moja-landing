"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

// UI Components
import { Button } from "@/components/ui/button";

// Custom Components
import { Section, Container } from "@/components/craft";

export default function Hero() {
  return (
    <Section id="hero">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="!mb-0">
            <Balancer>
              <span className="font-bold">
                Empowering Continuous Improvement
              </span>{" "}
              through J88Moja Systems
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              J88Moja Systems is dedicated to driving continuous improvement by
              developing innovative systems that streamline processes and
              empower data-driven decision-making. Our forward-thinking approach
              ensures that businesses operations can harness the full potential
              of their data to stay ahead in an ever-evolving landscape.
            </Balancer>
          </h3>
          <p className="text-muted-foreground opacity-70 mt-4">
            <Balancer>
              Streamline processes and improve efficiency with our software
              systems.
            </Balancer>
          </p>
          <div className="md:flex-col md:gap-2">
            <Button variant="outline" className="w-fit" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#features">Explore Services {"->"}</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#benefits">Explore Benefits {"->"}</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#products">Explore Product(s) {"->"}</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#faq">Frequently Asked Questions {"->"}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
