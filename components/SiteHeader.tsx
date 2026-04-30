import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "./Container";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
            VC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">{profile.name}</span>
            <span className="block text-xs text-ink/60">C# / .NET Engineer</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium text-ink/70">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-mist hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
