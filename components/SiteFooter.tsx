import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-ink/65 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-ink">Projects</Link>
          <a href={profile.linkedin} className="hover:text-ink" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resumeHref} className="hover:text-ink">Resume</a>
        </div>
      </Container>
    </footer>
  );
}
