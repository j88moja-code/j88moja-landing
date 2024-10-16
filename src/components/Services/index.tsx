"use client";
import SectionTitle from "../Common/SectionTitle";

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-10 bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Discover Our Services"
          paragraph="We offer a wide range of solutions designed to help your business grow and thrive. Explore how our tailored services can meet your unique needs and elevate your business to the next level."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-gray-700">
            <h3 className="mb-4 text-xl font-semibold text-primary dark:text-white">
              Comprehensive Solutions
            </h3>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
              Get tailored strategies and cutting-edge solutions that fit your
              business objectives, helping you achieve sustainable growth.
            </p>
            <a
              href="#contact"
              className="font-medium text-primary hover:underline dark:text-white"
            >
              Learn More →
            </a>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-gray-700">
            <h3 className="mb-4 text-xl font-semibold text-primary dark:text-white">
              Personalized Consultation
            </h3>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
              After a consultation, we will work with you to understand your
              needs and deliver customized solutions that meet your unique
              needs.
            </p>
            <a
              href="#calendly"
              className="font-medium text-primary hover:underline dark:text-white"
            >
              Book a Consultation →
            </a>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-gray-700">
            <h3 className="mb-4 text-xl font-semibold text-primary dark:text-white">
              Innovative Solutions
            </h3>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
              Discover our innovative solutions that are designed to streamline
              your operations and boost efficiency across different areas.
            </p>
            <a
              href="#cmoos"
              className="font-medium text-primary hover:underline dark:text-white"
            >
              View Products →
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Services;
