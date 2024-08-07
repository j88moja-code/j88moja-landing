"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useEffect } from "react";
import AOS from "aos";

// Custom Components
import { Section, Container } from "@/components/craft";
import { Particles } from "./particles";
import { Button } from "./ui/button";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  });
  return (
    <Section id="hero" className="pt-20">
      <Particles className="absolute inset-0 -z-10" />
      <Container>
        <div className="text-center px-8">
          <div className="mb-6" data-aos="fade-down">
            <div className="relative inline-flex before:absolute before:inset-0">
              <Link href="#calendly">
                <Button
                  asChild
                  // className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-900 dark:text-white hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                  variant="default"
                >
                  <span className="relative inline-flex items-center">
                    Book Consultation{" "}
                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <h1
            className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-orange-500 to-green-500"
            data-aos="fade-down"
          >
            <Balancer>
              <span className="font-bold">
                Empowering Continuous Improvement
              </span>
              <p className="mb-8 text-lg text-zinc-300/40 font-medium">
                through J88Moja Systems
              </p>
            </Balancer>
          </h1>
          <p
            className="text-muted-foreground opacity-70 mt-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Balancer>
              Streamline processes and improve efficiency with our software
              systems.
            </Balancer>
          </p>
          <h3
            className="text-muted-foreground"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Balancer>
              J88Moja Systems is dedicated to driving continuous improvement by
              developing innovative systems that streamline processes and
              empower data-driven decision-making. Our forward-thinking approach
              ensures that businesses operations can harness the full potential
              of their data to stay ahead in an ever-evolving landscape.
            </Balancer>
          </h3>

          <div
            className="flex flex-col gap-2 md:flex-row md:gap-4"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            {[
              {
                href: "#features",
                label: "Explore Services",
              },
              {
                href: "#benefits",
                label: "Explore Benefits",
              },
              {
                href: "#products",
                label: "Explore Product",
              },
              {
                href: "#faq",
                label: "Frequently Asked Questions",
              },
            ].map(({ href, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              >
                <Link href={href}>
                  <Button
                    asChild
                    className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-orange-500 via-orange-200 to-green/80 hover:bg-gradient-to-r hover:from-orange/60 hover:via-orange-500 hover:to-green-500  group"
                    variant="ghost"
                  >
                    <span className="relative inline-flex items-center">
                      {label}{" "}
                      <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </span>
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
