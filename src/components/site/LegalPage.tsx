import type { ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
}) {
  return (
    <>
      <Navbar solid />
      <main>
        <section className="surface-emerald pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="container-page text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-[2rem] leading-tight text-on-dark sm:text-5xl">
              {title}
            </h1>
            <span className="gold-rule mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted">
              {intro}
            </p>
          </div>
        </section>

        <section className="section-y bg-background">
          <div className="container-page">
            <div className="mx-auto max-w-3xl space-y-10 text-left">
              {sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-sans text-lg font-semibold text-foreground">
                    {section.heading}
                  </h2>
                  <span className="gold-rule mt-3" />
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer hashPrefix="/" />
    </>
  );
}
