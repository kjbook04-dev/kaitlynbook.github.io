import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <Container className="space-y-4">
        <h1 className="text-4xl font-heading text-foreground">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist yet.
        </p>
        <Link href="/" className="button-secondary">Back home</Link>
      </Container>
    </Section>
  );
}
