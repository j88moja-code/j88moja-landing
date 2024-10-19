"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Metadata } from "next";
import { toast } from "sonner";

export const metadata: Metadata = {
  title: "Sign Up Page | J88Moja Systems",
  description: "This a request demo page for JCMOOS",
  // other metadata
};

const RequestADemo = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isFormDataSubmitted, setIsFormDataSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestConfirmed, setIsRequestConfirmed] = useState(false);
  const [isErrorState, setIsErrorState] = useState(false);
  const [infoMessage, setInfoMessage] = useState(
    "Get a Live Demo of CMOOS - integrated solution, explore features and see how it can help you.",
  );

  // useEffect(() => {
  //   const queryParam = searchParams.get("approved");

  //   if (queryParam === "true") {
  //     setIsRequestConfirmed(true);
  //     setInfoMessage(
  //       "Thank you for your request. We will get back to you shortly.",
  //     );
  //   }
  //   setIsLoading(false);
  // }, [searchParams]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the email and name fields
  const validateForm = () => {
    const { name, email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!validateForm()) {
        toast.error("Please fill in all the required fields.");
        setIsLoading(false); // Ensure we reset the loading state here
        return;
      }
      const response = await fetch("/api/request-demo", {
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
          "Thank you for your request. The link should be in your email shortly. Check your spam folder if you don't see it in your inbox.",
        );
      } else {
        toast.error("Something went wrong. Please try again later.");
        setIsErrorState(true);
        setInfoMessage(result.error || "An error occurred");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      setIsErrorState(true);
      setInfoMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false); // Ensure loading state is reset in all cases
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
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
                  <>
                    <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                      {isRequestConfirmed
                        ? "You all set, we will get back to you shortly."
                        : isFormDataSubmitted
                          ? "Verification Email Sent"
                          : isErrorState
                            ? "Demo Request Failed"
                            : "Request A Demo"}
                    </h3>
                    {/* Highlight the message in red if it's an error  */}
                    {isErrorState ? (
                      <p className="mb-11 text-center text-base font-medium text-red-500">
                        {infoMessage}
                      </p>
                    ) : (
                      <p className="mb-11 text-center text-base font-medium text-body-color">
                        {infoMessage}
                      </p>
                    )}

                    {!isRequestConfirmed &&
                    !isFormDataSubmitted &&
                    !isErrorState ? (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                          />
                        </div>

                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary"
                          />
                        </div>
                        <div className="mb-8 flex items-center">
                          <input
                            type="checkbox"
                            id="terms"
                            className="mr-2 cursor-pointer"
                            required
                          />
                          <label
                            htmlFor="terms"
                            className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                          >
                            I agree to the{" "}
                            <Link
                              href="/terms-and-conditions"
                              className="ml-1 text-primary hover:underline"
                            >
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90"
                          disabled={isLoading}
                        >
                          {isLoading ? "Submitting..." : "Request a Demo"}
                        </button>
                      </form>
                    ) : (
                      // Button to try again and reset the form
                      <button
                        type="button"
                        className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90"
                        onClick={() => {
                          setIsRequestConfirmed(false);
                          setIsFormDataSubmitted(false);
                          setIsErrorState(false);
                          setFormData({
                            name: "",
                            email: "",
                          });
                          setInfoMessage(
                            "Get a Live Demo of CMOOS - integrated solution, explore features and see how it can help you.",
                          );
                        }}
                      >
                        {isErrorState ? "Try Again" : "Request a Demo"}
                      </button>
                    )}

                    <p className="mt-4 text-center text-base font-medium text-body-color">
                      Already using CMOOS?{" "}
                      <Link
                        href="https://cmoos.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default RequestADemo;
