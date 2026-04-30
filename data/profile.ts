export const profile = {
  name: "Vincent Chu",
  title: "Software Engineer (C# / .NET)",
  valueStatement:
    "Builds scalable APIs, microservices, and integration systems that make backend platforms easier to ship and operate.",
  location: "Chapel Hill, NC",
  linkedin: "https://www.linkedin.com/in/v1ncent-chu/",
  email: "vincent@example.com",
  resumeHref: "/Vincent-Chu-Resume-2026.docx",
};

export const projects = [
  {
    name: "Background Check API Modernization",
    description:
      "Modernized a critical background check workflow by moving legacy application behavior toward API-driven microservices and external provider integrations.",
    stack: ["C#", ".NET", "REST APIs", "Microservices", "SQL", "First Advantage"],
    impact:
      "Improved deployment flexibility and created a clearer foundation for cross-product integration across the HealthStream ecosystem.",
  },
  {
    name: "Webhook Processing System",
    description:
      "Enhanced function-critical webhook systems that exposed database-backed events to clients with low downtime requirements.",
    stack: ["C#", ".NET", "Webhooks", "APIs", "SQL"],
    impact:
      "Supported hundreds of requests per day while preserving reliability for existing client integrations.",
  },
  {
    name: "Azure DevOps Deployment Automation",
    description:
      "Replaced manual deployment steps with automated Azure DevOps release processes for backend services.",
    stack: ["Azure DevOps", "CI/CD", ".NET", "Release Automation"],
    impact:
      "Reduced deployment time from hours to minutes and improved release consistency.",
  },
  {
    name: "AMA CM and CAQH Integrations",
    description:
      "Owned healthcare integration work connecting internal systems with professional credentialing and continuing medical education data flows.",
    stack: ["C#", ".NET", "APIs", "SQL", "Integration Design"],
    impact:
      "Helped deliver reliable data exchange paths for important business workflows and partner systems.",
  },
  {
    name: "Integration Listeners and Web Scraping Tools",
    description:
      "Built supporting backend utilities for ingestion, monitoring, and data collection where direct integrations were not available.",
    stack: ["C#", "JavaScript", "SQL", "Web Scraping", "Backend Services"],
    impact:
      "Created practical tooling that expanded system coverage and supported the transition into larger API and distributed systems work.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Backend (.NET, APIs)",
    items: [
      ".NET services",
      "REST APIs",
      "Webhooks",
      "Integration listeners",
      "Validation and debugging",
    ],
  },
  {
    group: "Architecture",
    items: [
      "Microservices",
      "Distributed systems",
      "System design",
      "Design patterns",
      "Legacy modernization",
    ],
  },
  {
    group: "Tools",
    items: ["Docker", "Azure", "Azure DevOps", "SQL Server", "Git"],
  },
];

export const experience = [
  {
    role: "Software Developer II",
    company: "HealthStream",
    period: "Jan 2025 - May 2025",
    summary:
      "Led backend modernization, deployment automation, integration planning, and microservices work for healthcare platform systems.",
    highlights: [
      "Converted manual deployment workflows into Azure DevOps automation, reducing deployment time from hours to minutes.",
      "Enhanced critical webhook systems handling hundreds of requests per day with minimal downtime for existing clients.",
      "Decomposed monolithic application behavior into an independent microservice module to support cross-product integration.",
      "Facilitated technical planning across engineering, QA, and product to improve predictability and reduce integration cycle time from roughly half a year to months.",
    ],
  },
  {
    role: "Software Developer I",
    company: "HealthStream",
    period: "Jul 2021 - Jan 2025",
    summary:
      "Built and maintained API services, owned key integrations, strengthened SQL-backed systems, and mentored interns through code review.",
    highlights: [
      "Developed and debugged API services with stronger validation and integration reliability.",
      "Owned AMA CM, CAQH, and Background Check API integrations, including provider integration with First Advantage.",
      "Built foundational systems including integration listeners and web scraping tools.",
      "Applied SQL and software design patterns to deliver maintainable backend solutions.",
    ],
  },
];

export const achievements = [
  "Progressed from web scraping and database work into full API and distributed systems development.",
  "Trusted to own critical systems and integrations early in career.",
  "Played a major role in modernizing legacy architecture into microservices.",
  "Strengthened engineering collaboration by leading technical and planning meetings.",
];
