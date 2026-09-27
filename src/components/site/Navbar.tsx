import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Property Solutions", id: "solutions" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    if (solid) return;
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = solid || scrolled;

  const linkHref = (id: string) => (solid ? `/#${id}` : `#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        isSolid
          ? "bg-emerald-deep/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur"
          : "bg-emerald-deep/25 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          aria-label="Heaven Homes & Realty — home"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-12 w-auto md:h-14" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={linkHref(item.id)}
              aria-current={!solid && active === item.id ? "true" : undefined}
              className={cn(
                "relative py-1 text-[0.82rem] font-medium tracking-wide text-on-dark/85 transition-colors hover:text-gold",
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100",
                !solid && active === item.id && "text-gold after:scale-x-100",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkHref("contact")}
            className="hidden rounded-md bg-gold px-5 py-2.5 text-[0.82rem] font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright sm:inline-flex"
          >
            Enquire Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-on-dark/20 text-on-dark transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-emerald-deep transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex flex-col items-center gap-1 pb-8 pt-4 text-center"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={linkHref(item.id)}
              onClick={() => setOpen(false)}
              className="w-full max-w-sm rounded-md px-4 py-3 text-sm font-medium text-on-dark/90 transition-colors hover:bg-on-dark/5 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={linkHref("contact")}
            onClick={() => setOpen(false)}
            className="mt-3 w-full max-w-sm rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
          >
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  );
}
