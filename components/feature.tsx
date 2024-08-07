// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";

// Icon imports
import {
  ArrowRight,
  Database,
  Settings,
  ChartBar,
  UserRoundCheck,
} from "lucide-react";
import { Separator } from "./ui/separator";
type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Integration",
    href: "/",
    description:
      "Seamlessly integrate all your data sources to create a unified view, enabling efficient analysis and insights.",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Process Automation",
    href: "/",
    description:
      "Automate repetitive tasks and processes to increase efficiency and reduce human error across your operations.",
  },
  {
    icon: <ChartBar className="h-6 w-6" />,
    title: "Advanced Analytics",
    href: "/",
    description:
      "Leverage powerful analytics tools to gain deep insights into your operations and make informed decisions.",
  },
  {
    icon: <UserRoundCheck className="h-6 w-6" />,
    title: "User Friendly",
    href: "/",
    description:
      "Elevate your operations with intuitive user interfaces and seamless data entry capabilities.",
  },
];

const Feature = () => {
  return (
    <Section id="features">
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-80" />
      </div>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h2 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">
            <Balancer>
              Empowering Continuous Improvement through Technology
            </Balancer>
          </h2>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Harnessing the power of data and automation to drive innovation
              and drive success.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4 dark:text-white dark:opacity-80">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
