import { Facebook, Instagram, MapPin, Send } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { SOCIAL } from "@/components/site/Footer";

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-secondary/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-dark">Enquiry</span>
          <h2 className="mt-5 text-[1.85rem] leading-tight text-foreground sm:text-4xl">
            Tell Us What You're Looking For
          </h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Share your requirements and our team will get in touch with you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="card-premium p-7 text-center sm:text-left">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Heaven Homes &amp; Realty
              </h3>
              <span className="gold-rule mx-auto mt-4 sm:mx-0" />
              <p className="mt-5 flex items-start justify-center gap-3 text-sm leading-relaxed text-muted-foreground sm:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                <span>
                  207, Blue Eminence,
                  <br />
                  Opp. Sangini Gardenia,
                  <br />
                  Jahangirabad,
                  <br />
                  Surat, Gujarat – 395009
                  <br />
                  India
                </span>
              </p>
            </div>

            <div className="card-premium p-7 text-center sm:text-left">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Visit Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You are welcome at our Surat office to discuss your property requirement
                in person.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Blue+Eminence+Jahangirabad+Surat+Gujarat+395009"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald underline-offset-4 transition-colors hover:text-emerald-soft hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Open in Maps
              </a>
            </div>

            <div className="card-premium p-7 text-center sm:text-left">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Send an Enquiry
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Prefer to start online? Fill in the enquiry form and we will respond with
                relevant guidance.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald underline-offset-4 transition-colors hover:text-emerald-soft hover:underline"
              >
                <Send className="h-4 w-4" />
                Go to enquiry form
              </a>
              <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Heaven Homes & Realty on Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-emerald transition-colors hover:border-gold hover:text-emerald-soft"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Heaven Homes & Realty on Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-emerald transition-colors hover:border-gold hover:text-emerald-soft"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
