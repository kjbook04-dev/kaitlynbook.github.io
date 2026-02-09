import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteContent.personal.name}`
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              Let’s build something thoughtful
            </h1>
            <p className="text-sm text-muted-foreground">
              Share a bit about your project or collaboration. I’ll reply within 1–2 business days.
            </p>
            <div className="card p-6">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg font-semibold text-foreground">{siteContent.social.email}</p>
              <p className="mt-3 text-sm text-muted-foreground">LinkedIn</p>
              <a
                href={siteContent.social.linkedin}
                className="link-accent"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="card p-8">
            <form className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm"
                />
              </div>
              <button type="submit" className="button-primary w-full">
                Send message (placeholder)
              </button>
              <p className="text-xs text-muted-foreground">
                Form submissions are not wired yet. See the README for Formspree or Resend setup.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
