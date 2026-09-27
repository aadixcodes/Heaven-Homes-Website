import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    body: "Share your preferred location, property type, budget and purpose.",
  },
  {
    step: "02",
    title: "Requirement Analysis",
    body: "We understand and evaluate your property requirements.",
  },
  {
    step: "03",
    title: "Property Guidance",
    body: "Receive relevant guidance based on your needs and preferences.",
  },
  {
    step: "04",
    title: "Transaction Support",
    body: "Get professional assistance throughout the property transaction process.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-y bg-secondary/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">Our Process</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
            A Simple, Structured Property Journey
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          <span
            aria-hidden
            className="absolute left-[0.6rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block md:left-0 md:top-[0.6rem] md:h-px md:w-full"
          />
          {STEPS.map((item, index) => (
            <Reveal
              as="li"
              key={item.step}
              delay={index * 80}
              className="relative flex flex-col items-center text-center sm:items-start sm:pl-10 sm:text-left md:pl-0"
            >
              <span
                aria-hidden
                className="absolute left-0 top-2 hidden h-[0.85rem] w-[0.85rem] -translate-x-[0.12rem] rounded-full border-2 border-gold bg-background sm:block md:left-0 md:top-[0.17rem] md:translate-x-0"
              />
              <span className="font-display text-3xl text-gold md:mt-8">
                {item.step}
              </span>
              <h3 className="mt-3 font-sans text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
