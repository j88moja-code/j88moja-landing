import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | J88Moja Systems",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-8 text-center dark:bg-gray-900">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
        Oops! Page Not Found
      </h1>
      <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Image
        className="rounded-lg"
        src="/images/404.svg"
        alt="Not Found"
        width={400}
        height={400}
        priority
        title="Page Not Found"
      />
      <Link
        className="focus:ring-primary-light dark:focus:ring-primary-dark mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-opacity-50"
        href="/"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
