import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Blog",
  description: `Writing by ${siteContent.personal.name}`
};

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Blog
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              Notes on design, systems, and calm execution
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.blog.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card card-hover p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {post.date}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
