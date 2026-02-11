import { siteContent } from "@/content/siteContent";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kjbook04-dev.github.io";

  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/portfolio",
    "/blog",
    "/resources",
    "/contact"
  ];

  const portfolioRoutes = siteContent.portfolio.map((project) => `/portfolio/${project.slug}`);
  const blogRoutes = siteContent.blog.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
