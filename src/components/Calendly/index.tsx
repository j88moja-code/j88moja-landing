"use client";

import SectionTitle from "../Common/SectionTitle";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <section id="calendly" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Book a free consultation to get started"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative h-[900px] w-full">
                <InlineWidget
                  url="https://calendly.com/ntobekos-j88moja/30min"
                  styles={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    borderRadius: "0.375rem", // Tailwind's rounded-md equivalent
                    background: "transparent", // Use transparent for better dark mode compatibility
                  }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "00a2ff",
                    textColor: "4d5055",
                  }}
                  // className="rounded-md bg-white dark:bg-gray-800" // Tailwind classes for light/dark mode
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/calendly/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Calendly;
