"use client";

import * as z from "zod";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "@/public/hero-j88moja.jpg";
// import Logo from "@/public/j88moja-logo.png";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export default function Hero() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Section id="get-started">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* <Image
            src={Logo}
            alt="J88Moja Logo"
            width={200}
            height={200}
            className="w-24"
          /> */}
          <h1 className="!mb-0">
            <Balancer>
              <span className="font-bold">Empowering Growth</span> through
              J88Moja Systems
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 text-left"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-96"
                        placeholder="Enter your email address to get started today"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
