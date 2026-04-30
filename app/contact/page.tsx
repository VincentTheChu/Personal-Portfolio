import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Vincent Chu for software engineering opportunities.",
};

export default function ContactPage() {
  const contactLinks = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/v1ncent-chu",
      href: profile.linkedin,
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: "Resume",
      value: "Download DOCX",
      href: profile.resumeHref,
    },
  ];

  return (
    <>
      <PageIntro eyebrow="Contact" title="Recruiters and engineering teams can reach Vincent here.">
        <p>
          The fastest way to evaluate fit is through the project page, resume, and LinkedIn profile.
        </p>
      </PageIntro>
      <Container className="py-12">
        <section className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-lg border border-line bg-mist p-5 transition hover:border-pine hover:bg-white"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
                  {link.label}
                </span>
                <span className="mt-3 block break-words text-lg font-semibold text-ink">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
