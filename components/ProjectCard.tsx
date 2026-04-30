type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  impact: string;
};

export function ProjectCard({ name, description, stack, impact }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-ink">{name}</h2>
          <p className="mt-3 leading-7 text-ink/70">{description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Tech stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-mist px-3 py-1 text-sm text-ink/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-4">
          <h3 className="text-sm font-semibold text-ink">Impact</h3>
          <p className="mt-2 leading-7 text-ink/70">{impact}</p>
        </div>
      </div>
    </article>
  );
}
