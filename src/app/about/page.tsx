import Image from "next/image";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "About",
  description: `About ${siteContent.personal.name}`
};

export default function AboutPage() {
  return (
    <div>
      <Section>
        <Container className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              A calm, structured approach to operations, systems, and business support.
            </h1>
            <div className="space-y-4 text-sm text-muted-foreground">
              {siteContent.personal.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container>
          <div className="space-y-6">
            <h2 className="section-heading">Photo gallery</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {siteContent.photos.gallery.map((photo) => (
                <div key={photo} className="card overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image src={photo} alt="Gallery" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <h2 className="section-heading">Values & highlights</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {siteContent.personal.values.map((value) => (
                <div key={value.title} className="card card-hover p-6">
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container>
          <div className="card p-8">
            <div className="flex items-center gap-3">
              <Tag>Now</Tag>
              <h2 className="text-xl font-heading text-foreground">Current focus</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteContent.personal.now}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
