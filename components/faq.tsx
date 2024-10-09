import { Section, Container } from '@/components/craft';
import { ArrowUpRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from './ui/separator';

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: 'What is J88Moja Systems, and what do you offer?',
    answer:
      'J88Moja Systems is a technology company dedicated to providing innovative solutions that empower businesses to improve efficiency, enhance decision-making, and drive growth.',
  },
  {
    question: 'How can J88Moja Systems improve our business operations?',
    answer:
      'We offer a suite of tools designed to automate processes, integrate data, and provide insights through advanced analytics. This helps streamline operations and optimize performance.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We specialize in serving SMEs in the manufacturing sector. Our deep expertise and innovative solutions, however, extend beyond these boundaries, allowing us to cater to a wide range of sectors. We pride ourselves on crafting tailored solutions that address the specific challenges and unique needs of each industry, ensuring maximum efficiency, sustainability, and success for our clients.',
  },
  {
    question: 'Can I customize the solutions to fit my specific needs?',
    answer:
      'Absolutely! Our solutions are highly customizable, allowing you to adapt them to your specific business requirements and challenges.',
  },
  {
    question: 'What support options are available for customers?',
    answer:
      'We provide comprehensive customer support, including onboarding assistance, training sessions, and technical support to ensure you get the most out of our solutions.',
  },
];

const FAQ = () => {
  return (
    <Section id='faq'>
      <Container>
        {/* Section Header */}
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>
          Frequently Asked Questions
        </h2>
        <h4 className='mt-2 text-center text-lg text-gray-600 dark:text-gray-300'>
          Can't find the answer you're looking for? Reach out to our customer
          support team.
        </h4>
        <div className='flex justify-center'>
          <Separator className='mt-3 h-0.5 w-full max-w-xl bg-slate-200 dark:bg-slate-700' />
        </div>

        {/* Accordion Items */}
        <div className='mt-6 space-y-4 md:mt-8 md:space-y-6'>
          {content.map((item, index) => (
            <Accordion key={index} type='single' collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className='text-left text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='mt-2 text-base text-gray-700 dark:text-gray-300 md:w-3/4'>
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className='mt-2 inline-flex items-center text-blue-500 transition-opacity duration-150 hover:opacity-80'
                    >
                      Learn more
                      <ArrowUpRight className='ml-1 h-4 w-4' />
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
