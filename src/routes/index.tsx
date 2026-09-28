import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Process } from "@/components/site/Process";
import { PropertySolutions } from "@/components/site/PropertySolutions";
import { Services } from "@/components/site/Services";
import { TrustSection } from "@/components/site/TrustSection";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

const TITLE =
  "Heaven Homes & Realty | Real Estate Consultant in Surat";
const DESCRIPTION =
  "Heaven Homes & Realty is a trusted real estate consultancy in Surat offering professional guidance for buying, selling, resale and rental of residential and commercial properties.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <PropertySolutions />
        <WhyChooseUs />
        <Process />
        <About />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
