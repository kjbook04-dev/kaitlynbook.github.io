import Link from "next/link";
import { Container } from "@/components/Container";
import { siteContent } from "@/content/siteContent";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  return (
    <header className="border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-heading text-xl text-foreground">
          {siteContent.personal.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-4 text-xs font-semibold md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
