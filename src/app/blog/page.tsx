import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
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
              Notes on systems, growth, and everyday life
            </h1>
          </div>
          <div className="card p-6">
            <p className="text-sm text-muted-foreground">
              Blog posts are coming soon
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
