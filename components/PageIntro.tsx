import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-pine">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{children}</div>
      </div>
    </section>
  );
}
