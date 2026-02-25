import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { siteContent } from "@/content/siteContent";

interface PortfolioDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return siteContent.portfolio.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PortfolioDetailPageProps) {
  const project = siteContent.portfolio.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Portfolio" };
  }
  return {
    title: project.title,
    description: project.summary
  };
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const project = siteContent.portfolio.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const tools = project.tools
    .split(/,|\band\b/gi)
    .map((tool) => tool.trim())
    .filter(Boolean);
  const toolsText = tools.join(", ") || project.tools;
  const projectImage = "image" in project && typeof project.image === "string" ? project.image : null;
  const projectImages =
    "imageGallery" in project && Array.isArray(project.imageGallery)
      ? project.imageGallery.filter((img) => typeof img === "string")
      : projectImage
        ? [projectImage]
        : [];
  const projectDocument =
    "documentEmbed" in project && typeof project.documentEmbed === "string"
      ? project.documentEmbed
      : null;
  const externalPreviewUrl =
    "externalPreviewUrl" in project && typeof project.externalPreviewUrl === "string"
      ? project.externalPreviewUrl
      : null;
  const documentLinkLabel =
    "documentLinkLabel" in project && typeof project.documentLinkLabel === "string"
      ? project.documentLinkLabel
      : "Open PDF";
  const documentHelperText =
    "documentHelperText" in project && typeof project.documentHelperText === "string"
      ? project.documentHelperText
      : "Opens in a new tab";
  const showDocumentPreview = project.slug === "onboarding-sop-documentation-framework";
  const showInlinePreview = (projectDocument && showDocumentPreview) || !!externalPreviewUrl;
  const inlinePreviewHref = externalPreviewUrl ?? projectDocument;
  const inlinePreviewSrc = externalPreviewUrl ?? `${projectDocument}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
  const isAutoImageLayout =
    project.slug === "employer-brand-reputation-strategy" && projectImages.length === 1;
  const isOperationalRowLayout =
    project.slug === "operational-asset-tracking-system" && projectImages.length >= 2;
  const isOperationalThreeLayout =
    project.slug === "operational-asset-tracking-system" && projectImages.length >= 3;
  const isOperationalSingleImageLayout =
    project.slug === "operational-asset-tracking-system" && projectImages.length === 1;
  const imageFit = "imageFit" in project && project.imageFit === "contain" ? "object-contain" : "object-cover";
  const imageAspect =
    "imageFit" in project && project.imageFit === "contain" ? "aspect-[21/7]" : "aspect-[16/10]";

  return (
    <div>
      <Section>
        <Container className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Case Study
            </p>
            <h1 className="text-4xl font-heading text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-primary">{project.results}</p>
          </div>
          {showInlinePreview && inlinePreviewHref ? (
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-foreground">Project Visual</h2>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <a
                    href={inlinePreviewHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-primary transition hover:underline"
                  >
                    {documentLinkLabel}
                  </a>
                  <p className="text-xs text-muted-foreground">{documentHelperText}</p>
                </div>
                <a
                  href={inlinePreviewHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block w-full max-w-full shrink-0 self-stretch overflow-hidden rounded-xl border border-border/70 bg-background/70 p-2 shadow-sm sm:-mt-10 sm:w-[340px] sm:max-w-[340px] sm:self-start"
                  aria-label={`${project.title} preview`}
                >
                  <iframe
                    src={inlinePreviewSrc}
                    title={`${project.title} preview`}
                    className="pointer-events-none h-56 w-full sm:h-48"
                  />
                </a>
              </div>
            </div>
          ) : null}
          {projectImages.length > 0 ? (
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-foreground">Project Visual</h2>
              {projectDocument && !showDocumentPreview ? (
                <div className="mb-3">
                  <a
                    href={projectDocument}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-primary transition hover:underline"
                  >
                    {documentLinkLabel}
                  </a>
                </div>
              ) : null}
              {isOperationalRowLayout ? (
                isOperationalThreeLayout ? (
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border/70">
                    <div className="grid gap-4 bg-background/50 p-3 md:hidden">
                      {projectImages.slice(0, 3).map((image, index) => (
                        <div key={image} className="overflow-hidden rounded-xl border border-border/70 bg-background/70">
                          <div className="relative w-full aspect-[16/10]">
                            <Image
                              src={image}
                              alt={`${project.title} visual ${index + 1}`}
                              fill
                              className="object-contain object-top"
                              priority
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="hidden md:block">
                      <div className="projectVisualStrip">
                        {projectImages.slice(0, 3).map((image, index) => (
                          <div
                            key={image}
                            className={`cell relative ${index < 2 ? "cell--wide" : "cell--narrow"} ${index === 1 ? "cell--second-taller" : ""}`}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} visual ${index + 1}`}
                              fill
                              className="object-fill object-top"
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border/70">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {projectImages.map((image, index) => (
                        <div key={image} className="relative aspect-[16/10] w-full">
                          <Image
                            src={image}
                            alt={`${project.title} visual ${index + 1}`}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ) : isOperationalSingleImageLayout ? (
                <div className="mt-3 max-w-[34rem] overflow-hidden rounded-2xl border border-border/70 bg-background/70">
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={projectImages[0]}
                      alt={`${project.title} visual`}
                      fill
                      className="object-fill object-left scale-y-125"
                      priority
                    />
                  </div>
                </div>
              ) : isAutoImageLayout ? (
                <div className="mt-3 overflow-hidden rounded-2xl border border-border/70 bg-background/70">
                  <Image
                    src={projectImages[0]}
                    alt={`${project.title} visual`}
                    width={2802}
                    height={314}
                    className="block h-auto w-full object-contain"
                    sizes="(min-width: 768px) 900px, 100vw"
                    priority
                  />
                </div>
              ) : (
                <div className={`mt-3 grid gap-4 ${projectImages.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {projectImages.map((image, index) => (
                    <div key={image} className="overflow-hidden rounded-2xl border border-border/70 bg-background/70">
                      <div className={`relative w-full ${imageAspect}`}>
                        <Image
                          src={image}
                          alt={`${project.title} visual ${index + 1}`}
                          fill
                          className={imageFit}
                          priority
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
        </Container>
      </Section>

      <Section className="bg-section-wash">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Overview</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.overview}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Problem</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.problem}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Approach</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.approach}</p>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Tools</h2>
            <p className="mt-3 text-sm text-muted-foreground">{toolsText}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-foreground">Impact</h2>
            <p className="mt-3 text-sm text-muted-foreground">{project.learnings}</p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
