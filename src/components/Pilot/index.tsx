import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    title: "A 30-minute call",
    text: "You tell me how you record production and downtime today, and where it breaks down.",
  },
  {
    title: "Set up in a week",
    text: "I load your equipment list and product specifications, and show your supervisors how to use it.",
  },
  {
    title: "Run a pilot",
    text: "Use it on real shifts from R500/month. We agree the price after the pilot upfront, so there are no surprises.",
  },
];

const Pilot = () => {
  return (
    <section
      id="pilot"
      className="relative z-10 bg-gray-50 py-16 dark:bg-gray-800 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="How a pilot works"
          paragraph="Start small on one machine or line, and only carry on if it saves your team time."
          center
          mb="60px"
        />
        <ol className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <Link
            href="#calendly"
            className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Book a 30-minute call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pilot;
