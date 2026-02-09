import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

interface PortfolioDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return siteContent.portfolio.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PortfolioDetailPageProps) {
  const project = siteContent.portfolio.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Portfolio" };
  }
  return {
    title: project.title,
    description: project.summary
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = siteContent.portfolio.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Section>
        <Container className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Case Study
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-primary">{project.results}</p>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Overview</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.overview}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Problem</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.problem}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Approach</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.approach}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Tools</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.tools}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Learnings</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.learnings}</p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
