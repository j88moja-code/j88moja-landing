"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

// Zod and React Hook Form imports
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// UI component imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section, Container } from "@/components/craft";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Asset imports
import ContactImage from "@/public/contact-us.jpg";
import { Mail, MapPinHouse, Phone } from "lucide-react";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  message: z.string().min(1, { message: "Please enter a message." }),
});

// Server component for the contact page
export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Function to handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Send data to your server-side logic/API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.success("Thank you for your message!");
        redirect("/thank-you");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Section className="py-12">
      <Container className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">Contact Us</h1>
          <p className="text-muted-foreground">
            We’d love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
          <Image
            src={ContactImage}
            alt="Contact Us"
            width={500}
            height={400}
            className="mx-auto w-full rounded-lg md:col-span-2"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="md:w-96"
                        placeholder="Your Name"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="md:w-96"
                        placeholder="Your Email"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        className="md:w-96"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 w-full bg-primary text-white py-3 rounded-lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
          <div className="mt-8">
            <h3 className="mb-2">Our Contact Information</h3>
            <p>
              <strong>
                <MapPinHouse />
              </strong>{" "}
              Johanesburg
            </p>
            <p>
              <strong>
                <Phone />
              </strong>{" "}
              +27 64 123 4567
            </p>
            <p>
              <strong>
                <Mail />
              </strong>{" "}
              j88moja-code@outlook.com
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
