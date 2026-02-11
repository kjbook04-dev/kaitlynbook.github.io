import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/80">
      <Container className="py-10">
        <div className="space-y-2 text-center">
          <p className="text-lg font-heading text-foreground">Let’s connect</p>
          <p className="text-sm text-muted-foreground">
            Email me at{" "}
            <a
              href={`mailto:${siteContent.social.email}`}
              className="font-semibold text-primary transition-colors hover:text-foreground"
            >
              {siteContent.social.email}
            </a>{" "}
            or connect on{" "}
            <a
              href={siteContent.social.linkedin}
              className="font-semibold text-primary transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-center text-xs text-muted-foreground">
          <span>{siteContent.personal.name} · {new Date().getFullYear()}</span>
          <span>Built with strategy, clarity, and operational excellence in mind.</span>
        </div>
      </Container>
    </footer>
  );
}
