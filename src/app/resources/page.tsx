import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Resources",
  description: "Tools, templates, and learning resources."
};

export default function ResourcesPage() {
  return (
    <div>
      <Section>
        <Container className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Resources
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              A resource library for organized, growth-focused professionals
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore templates, workflows, and tools that support organization, efficiency, and clear execution.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container className="space-y-8">
          {siteContent.resources.map((resource) => (
            <div key={resource.category} className="card p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{resource.category}</h2>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                {resource.items.length === 0 && <Tag>Coming soon</Tag>}
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {resource.items.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border/80 bg-background/70 p-4 text-sm text-muted-foreground">
                    More resources are on the way.
                  </div>
                ) : (
                  resource.items.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <Tag>{item.tag}</Tag>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      {item.link ? (
                        <a href={item.link} className="link-accent mt-3" target="_blank" rel="noreferrer">
                          Visit
                        </a>
                      ) : (
                        <span className="mt-3 inline-flex text-xs font-semibold text-muted-foreground">
                          Link coming soon
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </div>
  );
}
