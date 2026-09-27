import {
  ClipboardList,
  Handshake,
  Home,
  KeyRound,
  Repeat,
  Search,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const SERVICES = [
  {
    icon: Search,
    title: "Property Buying",
    body: "Helping clients identify suitable residential and commercial properties based on requirements and budget.",
  },
  {
    icon: Home,
    title: "Property Selling",
    body: "Professional assistance for property owners looking to sell their residential or commercial property.",
  },
  {
    icon: Repeat,
    title: "Resale Properties",
    body: "Guidance for clients exploring resale property opportunities.",
  },
  {
    icon: KeyRound,
    title: "Rental Properties",
    body: "Assistance with residential and commercial rental requirements.",
  },
  {
    icon: ClipboardList,
    title: "Property Consultation",
    body: "Requirement-based guidance to help clients make informed real estate decisions.",
  },
  {
    icon: Handshake,
    title: "End-to-End Assistance",
    body: "Support throughout the property transaction journey.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-secondary/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">What We Do</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
            Our Real Estate Services
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal as="li" key={service.title} delay={index * 60}>
              <article className="card-premium h-full p-7 text-center sm:text-left">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald text-gold">
                  <service.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-sans text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
