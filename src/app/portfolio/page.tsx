import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Portfolio",
  description: `Selected work by ${siteContent.personal.name}`
};

export default function PortfolioPage() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              Signature projects and results
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {siteContent.portfolio.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="card card-hover p-6"
              >
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-primary">{project.results}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
