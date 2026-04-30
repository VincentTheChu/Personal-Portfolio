import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { skills } from "@/data/profile";

export const metadata: Metadata = {
  title: "Skills",
  description: "C#, .NET, API, microservices, Azure, Docker, and SQL skills.",
};

export default function SkillsPage() {
  return (
    <>
      <PageIntro eyebrow="Skills" title="A backend toolkit centered on .NET, scalable APIs, and system modernization.">
        <p>
          Vincent’s strongest work sits at the intersection of reliable backend services, integrations, and practical architecture.
        </p>
      </PageIntro>
      <Container className="py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <section key={skillGroup.group} className="rounded-lg border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-ink">{skillGroup.group}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-mist px-3 py-1 text-sm text-ink/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
