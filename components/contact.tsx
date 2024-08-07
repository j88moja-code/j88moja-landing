"use client";

import Image from "next/image";

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
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { postContactUsData } from "@/app/api/actions";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }).max(40),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." }),
  position: z
    .string()
    .min(1, { message: "Please enter your position." })
    .max(32),
  message: z.string().min(1, { message: "Please enter a message." }).max(288),
});

// Server component for the contact page
export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      position: "",
      message: "",
    },
  });

  return (
    <Section id="contact">
      <Container className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            We’d love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
          <div className="flex items-center justify-center">
            <Separator className="mt-3 bg-slate-100/20 h-0.5 w-80" />
          </div>
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
              action={async (formData) => {
                await postContactUsData(formData);
                form.reset();
                toast.success("Thank you for your message!");
                setTimeout(() => {
                  toast.dismiss();
                }, 3000);
              }}
              className="flex flex-col gap-4 dark:text-white"
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
                        placeholder="Your Full Name"
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
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="md:w-96"
                        placeholder="Your Position at Your Organisation"
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
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <div className="grid grid-cols-2 gap-4">
                <Button
                  type="submit"
                  variant="default"
                  disabled={form.formState.isSubmitting}
                >
                  Send Message
                </Button>
              </div> */}
              {form.formState.isSubmitting ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </Button>
              ) : (
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  variant="default"
                >
                  Send Message
                </Button>
              )}
            </form>
          </Form>
          <div className="mt-8">
            <h3 className="mb-2">Our Contact Information</h3>
            <p className="flex gap-2 text-muted-foreground">
              <strong>
                <MapPinHouse />
              </strong>{" "}
              Johanesburg, South Africa
            </p>
            <p className="flex gap-2 text-muted-foreground">
              <strong>
                <Phone />
              </strong>{" "}
              +27 83 485 5744
            </p>
            <Link
              className="flex gap-2 text-muted-foreground"
              href="mailto:info@j88moja.tech"
            >
              <strong>
                <Mail />
              </strong>{" "}
              info@j88moja.tech
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
