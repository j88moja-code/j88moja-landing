import { Section, Container } from "@/components/craft";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What is J88Moja Systems, and what do you offer?",
    answer:
      "J88Moja Systems is a technology company dedicated to providing innovative solutions that empower businesses to improve efficiency, enhance decision-making, and drive growth.",
  },
  {
    question: "How can J88Moja Systems improve our business operations?",
    answer:
      "We offer a suite of tools designed to automate processes, integrate data, and provide insights through advanced analytics. This helps streamline operations and optimize performance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We specialize in serving pulp and paper industry, with a strong focus on the tissue manufacturing industry. Our deep expertise and innovative solutions, however, extend beyond these boundaries, allowing us to cater to a wide range of sectors. We pride ourselves on crafting tailored solutions that address the specific challenges and unique needs of each industry, ensuring maximum efficiency, sustainability, and success for our clients.",
  },
  {
    question: "Can I customize the solutions to fit my specific needs?",
    answer:
      "Absolutely! Our solutions are highly customizable, allowing you to adapt them to your specific business requirements and challenges.",
  },
  {
    question: "What support options are available for customers?",
    answer:
      "We provide comprehensive customer support, including onboarding assistance, training sessions, and 24/7 technical support to ensure you get the most out of our solutions.",
  },
];

const FAQ = () => {
  return (
    <Section className="border-b">
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
