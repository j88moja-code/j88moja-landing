import arcjet, {
  shield,
  detectBot,
  fixedWindow,
  validateEmail,
} from "@arcjet/next";

export default arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
    fixedWindow({
      mode: "LIVE",
      // match: "/api/contact-us",
      window: "2m",
      max: 3,
    }),
    validateEmail({
      mode: "LIVE",
      block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),
  ],
});
