import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/80">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-heading text-foreground">Let’s connect</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Email me at {siteContent.social.email} or connect on LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${siteContent.social.email}`} className="button-primary">Email</a>
            <a href={siteContent.social.linkedin} className="button-secondary" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground">
          <span>{siteContent.personal.name} · {new Date().getFullYear()}</span>
          <span>Designed with calm intention and a focus on clarity.</span>
        </div>
      </Container>
    </footer>
  );
}
