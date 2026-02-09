export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://example.com/sitemap.xml" // REPLACE WITH YOUR DOMAIN
  };
}
