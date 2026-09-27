import { MapPin } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const FOCUS = [
  "Trust",
  "Professionalism",
  "Personalized guidance",
  "Client requirements",
  "Long-term relationships",
];

export function About() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-page grid gap-12 text-center lg:grid-cols-[1fr_1fr] lg:gap-20 lg:text-left">
        <Reveal>
          <span className="eyebrow-dark">Who We Are</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
            About Heaven Homes &amp; Realty
          </h2>
          <span className="gold-rule mx-auto mt-6 lg:mx-0" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            Heaven Homes &amp; Realty is a Surat-based real estate consultancy helping
            individuals and businesses with buying, selling, resale and rental property
            requirements. We work closely with each client to understand their
            requirement, budget and preferences, then provide guidance through the
            property transaction process.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            Our approach is consultative rather than transactional — the aim is a
            decision you remain comfortable with long after the paperwork is complete.
          </p>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <ul className="mx-auto grid w-full max-w-md gap-3 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
            {FOCUS.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-md border border-gold/40 bg-secondary/50 px-5 py-4 text-left lg:mx-0 lg:max-w-none">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Surat, Gujarat, India</span>
              <br />
              207, Blue Eminence, Opp. Sangini Gardenia, Jahangirabad, Surat, Gujarat –
              395009
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
