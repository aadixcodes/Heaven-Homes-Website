import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

const TITLE = "Terms of Service | Heaven Homes & Realty, Surat";
const DESCRIPTION =
  "The terms that apply when you use the Heaven Homes & Realty website and submit a property enquiry to our Surat-based real estate consultancy.";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "These Terms of Service apply to your use of the Heaven Homes & Realty website. By browsing this website or submitting an enquiry through it, you agree to these terms. If you do not agree with them, please do not use the website.",
    ],
  },
  {
    heading: "2. Use of Website",
    paragraphs: [
      "This website is provided for general information about our real estate consultancy services. You agree to use it lawfully and not to interfere with its normal operation, security or availability.",
    ],
  },
  {
    heading: "3. Nature of Services",
    paragraphs: [
      "Heaven Homes & Realty is a real estate consultancy. We provide guidance and assistance for buying, selling, resale and rental of residential and commercial properties. We are not a party to any transaction between a buyer, seller, landlord or tenant unless separately agreed in writing.",
    ],
  },
  {
    heading: "4. Property Information Disclaimer",
    paragraphs: [
      "This website does not publish property listings, prices or availability. Any property information shared with you during a consultation is indicative and should be independently verified before you make a decision or commitment.",
    ],
  },
  {
    heading: "5. User Responsibilities",
    paragraphs: [
      "You are responsible for the accuracy of the information you provide to us, including your contact details and property requirements. Inaccurate information may affect the guidance we are able to provide.",
    ],
  },
  {
    heading: "6. Enquiry & Communication",
    paragraphs: [
      "When you submit an enquiry, you consent to us contacting you in connection with that enquiry using the details you have provided. Submitting an enquiry does not create any contractual obligation on either side.",
    ],
  },
  {
    heading: "7. Third-Party Services",
    paragraphs: [
      "Property transactions may involve third parties such as legal advisors, financial institutions, valuers and government authorities. We are not responsible for the services, decisions or timelines of these third parties.",
    ],
  },
  {
    heading: "8. Intellectual Property",
    paragraphs: [
      "The Heaven Homes & Realty name, logo, and the content and design of this website belong to Heaven Homes & Realty and may not be copied or reused without permission.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by law, Heaven Homes & Realty is not liable for losses arising from reliance on general information published on this website. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "10. External Links",
    paragraphs: [
      "This website may link to external websites, including our social media profiles. We do not control those websites and are not responsible for their content or policies.",
    ],
  },
  {
    heading: "11. Changes to Terms",
    paragraphs: [
      "We may update these terms from time to time. The version published on this page is the version that applies to your use of the website.",
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "These terms are governed by the laws of India, and the courts at Surat, Gujarat have jurisdiction over any dispute relating to them.",
    ],
  },
  {
    heading: "13. Contact Information",
    paragraphs: [
      "Heaven Homes & Realty, 207, Blue Eminence, Opp. Sangini Gardenia, Jahangirabad, Surat, Gujarat – 395009, India. You can also reach us using the enquiry form on this website.",
    ],
  },
];

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="Please read these terms carefully before using the Heaven Homes & Realty website or submitting a property enquiry."
      sections={SECTIONS}
    />
  );
}
