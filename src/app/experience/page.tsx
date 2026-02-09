import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Experience",
  description: `Experience timeline for ${siteContent.personal.name}`
};

export default function ExperiencePage() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Experience
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              A timeline of impact
            </h1>
          </div>
          <div className="space-y-10 border-l border-border/70 pl-6">
            {siteContent.experience.map((role) => (
              <div key={`${role.company}-${role.role}`} className="relative">
                <span className="absolute -left-[38px] top-6 h-4 w-4 rounded-full border border-primary bg-background shadow-soft" />
                <div className="card p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">{role.role}</h2>
                      <p className="text-sm text-muted-foreground">{role.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">{role.dates}</span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
