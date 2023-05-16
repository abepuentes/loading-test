import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export const config = {
  // Skip all non-content paths
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
