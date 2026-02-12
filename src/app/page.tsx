import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { HubIcon, type HubIconName } from "@/components/HubIcon";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

export const metadata = {
  title: "Home",
  description: siteContent.personal.tagline
};

export default function HomePage() {
  const featuredProjects = siteContent.portfolio.slice(0, 3);
  const latestPosts = siteContent.blog.slice(0, 3);
  const resourcePreview = siteContent.resources.slice(0, 3);

  return (
    <div>
      <Section className="pt-12 md:pt-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {siteContent.personal.location}
              </p>
              <h1 className="text-4xl font-heading text-foreground md:text-6xl">
                {siteContent.personal.name}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                {siteContent.personal.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="button-primary">View Portfolio</Link>
              <Link href="/blog" className="button-secondary">Read the Blog</Link>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              {siteContent.personal.bio[0]}
            </p>
          </div>
          <div className="card card-hover flex items-center justify-center p-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={siteContent.photos.headshot}
                alt={`${siteContent.personal.name} headshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="section-heading">Navigate the hub</h2>
              <Link href="/about" className="link-underline">About me</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {siteContent.hubCards.map((card) => (
                <Link key={card.href} href={card.href} className="card card-hover p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <HubIcon name={card.icon as HubIconName} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="section-heading">Featured work</h2>
              <Link href="/portfolio" className="link-underline">View all</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="card card-hover p-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary">{project.results}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="section-heading">About</h2>
            <p className="text-sm text-muted-foreground">{siteContent.personal.bio[0]}</p>
            <p className="text-sm text-muted-foreground">{siteContent.personal.bio[1]}</p>
            <Link href="/about" className="link-accent">Read more</Link>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-foreground">Now</h3>
            <p className="mt-3 text-sm text-muted-foreground">{siteContent.personal.now}</p>
            <div className="mt-4 subtle-divider" />
            <p className="mt-4 text-sm text-muted-foreground">
              Let’s build something intentional together.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="section-heading">Latest writing</h2>
              <Link href="/blog" className="link-underline">See all posts</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card card-hover p-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {post.date}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="section-heading">Resources</h2>
              <Link href="/resources" className="link-underline">Browse resources</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {resourcePreview.map((resource) => (
                <div key={resource.category} className="card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{resource.category}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {resource.items.slice(0, 2).map((item) => (
                      <Tag key={item.title}>{item.title}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card card-hover flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-heading text-foreground">Ready to collaborate?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach me at {siteContent.social.email} or connect on LinkedIn.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${siteContent.social.email}`} className="button-primary">Email</a>
              <Link href="/contact" className="button-secondary">Contact page</Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
