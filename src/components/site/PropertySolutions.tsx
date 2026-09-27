import { Reveal } from "@/components/site/Reveal";
import commercialImage from "@/assets/commercial.jpg";
import residentialImage from "@/assets/hero-architecture.jpg";

const CATEGORIES = [
  {
    title: "Residential",
    body: "Homes, apartments and residential properties.",
  },
  {
    title: "Commercial",
    body: "Spaces and properties for business requirements.",
  },
  { title: "Buy", body: "Guidance for clients looking to purchase property." },
  { title: "Sell", body: "Professional assistance for property owners." },
  { title: "Resale", body: "Assistance with resale property requirements." },
  { title: "Rent", body: "Residential and commercial rental assistance." },
];

export function PropertySolutions() {
  return (
    <section id="solutions" className="surface-emerald section-y">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Areas We Work In</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-on-dark sm:text-4xl">
            Real Estate Solutions For Every Requirement
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="grid gap-6 sm:grid-cols-2">
            {CATEGORIES.map((category, index) => (
              <article
                key={category.title}
                className="card-emerald flex h-full flex-col p-7 text-center sm:text-left"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-sans text-base font-semibold uppercase tracking-[0.12em] text-on-dark">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">
                  {category.body}
                </p>
              </article>
            ))}
          </Reveal>

          <Reveal delay={120} className="grid gap-6">
            <div className="overflow-hidden rounded-lg border border-on-dark/10">
              <img
                src={residentialImage}
                alt="Residential apartment building exterior"
                loading="lazy"
                width={1920}
                height={1200}
                className="h-56 w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04] lg:h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-on-dark/10">
              <img
                src={commercialImage}
                alt="Modern commercial office building"
                loading="lazy"
                width={1200}
                height={912}
                className="h-56 w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04] lg:h-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
