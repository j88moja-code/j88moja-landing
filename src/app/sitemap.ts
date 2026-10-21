import type { MetadataRoute } from "next";
import { CALCULATORS } from "@/lib/calculators";
import { SITE_URL } from "@/lib/site";

/**
 * Pages Google should know about, most important first.
 * The confirmation page and legal pages are left out on purpose.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/calculators", 0.9, "weekly"),
    ...CALCULATORS.map((c) => page(`/calculators/${c.id}`, 0.8)),
    page("/request-a-demo", 0.7),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/book-consultation", 0.5),
    page("/contact", 0.5),
  ];
}
