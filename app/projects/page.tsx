import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Backend, API, microservices, and integration projects by Vincent Chu.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projects" title="Backend systems, APIs, and integrations with measurable outcomes.">
        <p>
          Project work is framed around the problem solved, the stack used, and the operational or delivery impact.
        </p>
      </PageIntro>
      <Container className="grid gap-6 py-12 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Container>
    </>
  );
}
