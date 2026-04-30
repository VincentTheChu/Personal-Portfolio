import Link from "next/link";
import { achievements, profile, projects, skills } from "@/data/profile";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemVisual } from "@/components/SystemVisual";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
              {profile.title}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/70">
              {profile.valueStatement}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
              >
                Contact
              </Link>
            </div>
          </div>
          <SystemVisual />
        </Container>
      </section>

      <section className="border-y border-line bg-mist">
        <Container className="grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div key={achievement} className="rounded-lg border border-line bg-white p-5">
              <p className="text-sm leading-6 text-ink/70">{achievement}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">Projects recruiters can evaluate</h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-pine hover:text-ink">
              See all projects
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist">
        <Container className="py-14 sm:py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
              Core skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Backend-first engineering toolkit</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup) => (
              <section key={skillGroup.group} className="rounded-lg border border-line bg-white p-5">
                <h3 className="font-semibold text-ink">{skillGroup.group}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {skillGroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
