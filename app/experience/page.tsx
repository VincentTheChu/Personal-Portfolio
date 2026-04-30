import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { achievements, experience } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience summary for Vincent Chu.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="Experience" title="Professional experience focused on impact and systems built.">
        <p>
          Experience is summarized around backend ownership, delivery improvements, and modernization of legacy systems.
        </p>
      </PageIntro>
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_0.72fr]">
        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.role}-${item.period}`} className="rounded-lg border border-line bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{item.role}</h2>
                  <p className="mt-1 text-ink/65">{item.company}</p>
                </div>
                <p className="text-sm font-semibold text-pine">{item.period}</p>
              </div>
              <p className="mt-5 leading-7 text-ink/70">{item.summary}</p>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-7 text-ink/70">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-pine" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-ink">Career themes</h2>
          <ul className="mt-5 space-y-4">
            {achievements.map((achievement) => (
              <li key={achievement} className="border-b border-line pb-4 leading-7 text-ink/70 last:border-0 last:pb-0">
                {achievement}
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  );
}
