/** Public address of the site, used for canonical links, the sitemap and structured data. */
export const SITE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://www.j88moja.tech").replace(/\/$/, "");

export const SITE_NAME = "FibreMate";

/**
 * The FibreMate app itself (where customers sign in). Set NEXT_PUBLIC_APP_URL
 * in Vercel; change it when the app moves, e.g. to https://app.fibremate.co.za.
 */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://fibremate-app.onrender.com").replace(/\/$/, "");
