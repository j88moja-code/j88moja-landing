"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [isFormDataSubmitted, setIsFormDataSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorState, setIsErrorState] = useState(false);
  const [infoMessage, setInfoMessage] = useState(
    "We would love to hear from you. Please fill out the form below and we will get back to you shortly.",
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.data === "Success") {
        setIsFormDataSubmitted(true);
        setInfoMessage(
          "Thank you for your message. We will get back to you shortly.",
        );
      } else {
        toast.error("Something went wrong. Please try again later.");
        setIsErrorState(true);
        setInfoMessage(result.error || "An error occurred");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      setIsErrorState(true);
      setInfoMessage("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Image
                    className="w-auto justify-center"
                    src={"/loading.gif"}
                    alt="loading"
                    width={80}
                    height={80}
                  ></Image>
                </div>
              ) : (
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {isFormDataSubmitted ? (
                    <div className="flex items-center justify-center">
                      <Image
                        className="h-24 w-24 justify-center"
                        src={"/sent.svg"}
                        alt="loading"
                        width={30}
                        height={30}
                      />
                    </div>
                  ) : isErrorState ? (
                    "Something went wrong. Please try again later."
                  ) : (
                    "Get in touch"
                  )}
                </h3>
              )}
              {isErrorState ? (
                <p className="mb-11 text-center text-base font-medium text-red-500">
                  {infoMessage}
                </p>
              ) : (
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  {infoMessage}
                </p>
              )}
              {!isFormDataSubmitted && !isErrorState ? (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          rows={5}
                          // minLength={30}
                          maxLength={300}
                          // @ts-expect-error
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              ) : isErrorState ? (
                <button
                  type="button"
                  className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90"
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      message: "",
                    });
                    setIsFormDataSubmitted(false);
                    setIsErrorState(false);
                    setInfoMessage(
                      "We would love to hear from you. Please fill out the form below and we will get back to you shortly.",
                    );
                  }}
                >
                  Try Again
                </button>
              ) : (
                <div className="w-full px-4">
                  <Link
                    href="/"
                    className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90 "
                  >
                    Back to Home
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
