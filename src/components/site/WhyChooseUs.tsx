import {
  Building2,
  Compass,
  LifeBuoy,
  MapPinned,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

const REASONS = [
  {
    icon: Compass,
    title: "Requirement-Focused Guidance",
    body: "Understand the client's actual needs before recommending suitable options.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Assistance",
    body: "Clear and structured support throughout the property journey.",
  },
  {
    icon: MapPinned,
    title: "Local Understanding",
    body: "Based in Surat with knowledge of the local real estate market.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    body: "Support across multiple property requirements.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    body: "Keep clients informed throughout the process.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    body: "Assist from initial requirement to transaction coordination.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-y bg-background">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">Why Us</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
            Why Clients Choose
            <span className="block">Heaven Homes &amp; Realty</span>
          </h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={index * 60}
              className="flex flex-col items-center gap-4 border-t border-border pt-7 text-center sm:items-start sm:text-left"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/50 text-emerald">
                <reason.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-sans text-base font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
