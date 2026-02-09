import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return siteContent.blog.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps) {
  const post = siteContent.blog.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Blog" };
  }
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = siteContent.blog.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Section>
        <Container className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {post.date}
            </p>
            <h1 className="mt-3 text-4xl font-heading text-foreground md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm text-muted-foreground">
              This is a placeholder post page. Replace this content by connecting MDX files
              or editing the blog entries in `src/content/siteContent.ts`.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
