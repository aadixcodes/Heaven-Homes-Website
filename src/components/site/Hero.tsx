import heroImage from "@/assets/hero-architecture.jpg";

const TRUST_ITEMS = [
  "Residential",
  "Commercial",
  "Buy",
  "Sell",
  "Resale",
  "Rental",
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Modern luxury residential tower at dusk"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(150deg,oklch(0.223_0.0455_168/0.95)_0%,oklch(0.223_0.0455_168/0.82)_45%,oklch(0.29_0.057_166/0.7)_100%)]"
      />

      <div className="container-page flex min-h-[38rem] flex-col justify-center py-32 text-center md:min-h-[44rem] md:py-40 lg:items-start lg:text-left">
        <span className="eyebrow">Trusted Real Estate Consultancy in Surat</span>

        <h1 className="mt-6 max-w-3xl text-[2.1rem] leading-[1.12] text-on-dark sm:text-5xl lg:text-6xl">
          Find the Right Property.
          <span className="mt-2 block text-gold">Make the Right Move.</span>
        </h1>

        <span className="gold-rule mx-auto mt-8 lg:mx-0" />

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg lg:mx-0">
          Professional real estate guidance for buying, selling, resale and rental
          properties across Surat.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-md border border-on-dark/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-on-dark transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-md bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright sm:w-auto"
          >
            Enquire Now
          </a>
        </div>

        <ul className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-on-dark-muted lg:mx-0 lg:justify-start">
          {TRUST_ITEMS.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              {index > 0 && <span className="text-gold">•</span>}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
