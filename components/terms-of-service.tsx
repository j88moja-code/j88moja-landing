// Custom components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

export const TermsOfService = () => {
  return (
    <Section className="border-b dark:border-b-0" id="tos">
      <Container>
        <h3 className="!mt-0">Terms of Service</h3>
        <h4 className="text-muted-foreground">
          Please read these terms of service carefully before using our website.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          <p>
            <Balancer>
              By accessing and using this website, you agree to be bound by
              these terms of service. If you do not agree to these terms, please
              do not use this website.
            </Balancer>
          </p>
        </div>
      </Container>
    </Section>
  );
};
