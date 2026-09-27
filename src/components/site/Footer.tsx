import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin } from "lucide-react";

import { Logo } from "@/components/site/Logo";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Property Solutions", id: "solutions" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/heavenh0mes/",
  facebook: "https://www.facebook.com/profile.php?id=61583649045116",
};

export function Footer({ hashPrefix = "" }: { hashPrefix?: string }) {
  return (
    <footer className="surface-emerald border-t border-on-dark/10">
      <div className="container-page grid gap-12 py-16 text-center md:py-20 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16 lg:text-left">
        <div className="flex flex-col items-center gap-5 lg:items-start">
          <Logo className="h-16 w-auto" />
          <p className="max-w-sm text-sm leading-relaxed text-on-dark-muted">
            Trusted real estate consultancy in Surat offering professional assistance for
            buying, selling, resale and rental properties.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Heaven Homes & Realty on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-on-dark/20 text-on-dark transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Heaven Homes & Realty on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-on-dark/20 text-on-dark transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="eyebrow">Navigation</h2>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`${hashPrefix}#${item.id}`}
              className="text-sm text-on-dark-muted transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="eyebrow">Legal</h2>
          <Link
            to="/terms-of-service"
            className="text-sm text-on-dark-muted transition-colors hover:text-gold"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="text-sm text-on-dark-muted transition-colors hover:text-gold"
          >
            Privacy Policy
          </Link>

          <h2 className="eyebrow mt-6">Location</h2>
          <p className="flex items-start justify-center gap-2 text-sm leading-relaxed text-on-dark-muted lg:justify-start">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              207, Blue Eminence, Opp. Sangini Gardenia,
              <br />
              Jahangirabad, Surat, Gujarat – 395009
              <br />
              India
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-on-dark/10">
        <div className="container-page py-6 text-center text-xs text-on-dark-muted">
          © 2026 Heaven Homes &amp; Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
