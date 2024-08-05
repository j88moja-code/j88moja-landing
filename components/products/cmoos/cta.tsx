"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function CTA() {
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
    <Section id="cmoos-cat">
      <Container className="space-y-8">
        <h2 className="!my-0">Join our mailing list</h2>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>
            Join our mailing list to receive exclusive offers and updates about
            CMOOS.
          </Balancer>
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-96"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We'll never share your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <div className="flex justify-center">
          <Link className="-mt-1" href="#home">
            Back to <span aria-hidden="true">&uarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default CTA;
