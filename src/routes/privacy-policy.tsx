import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

const TITLE = "Privacy Policy | Heaven Homes & Realty, Surat";
const DESCRIPTION =
  "How Heaven Homes & Realty, a real estate consultancy in Surat, collects, uses and protects the information you share through a property enquiry.";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We collect only the information you choose to share with us through this website, primarily when you submit a property enquiry.",
    ],
  },
  {
    heading: "2. Personal Information",
    bullets: ["Name", "Email address", "Phone number"],
  },
  {
    heading: "3. Property Requirement Information",
    bullets: [
      "Property preferences such as residential, commercial, land or plot",
      "Location preferences",
      "Requirement type such as buy, sell, resale or rent",
      "Budget range",
      "Purpose of the requirement",
      "Any additional requirements you describe",
    ],
  },
  {
    heading: "4. How We Use Information",
    paragraphs: [
      "We use the information you provide to understand your requirement, respond to your enquiry and provide relevant real estate guidance. We do not sell your information.",
    ],
  },
  {
    heading: "5. Enquiry Processing",
    paragraphs: [
      "Enquiry details are reviewed by our team so that the guidance we share is relevant to your stated requirement, budget and preferences.",
    ],
  },
  {
    heading: "6. Communication",
    paragraphs: [
      "We may contact you by phone, email or messaging in connection with your enquiry. You can ask us to stop contacting you at any time.",
    ],
  },
  {
    heading: "7. Cookies",
    paragraphs: [
      "This website uses only what is necessary for the site to function and to keep it secure. We do not use cookies to build advertising profiles.",
    ],
  },
  {
    heading: "8. Third-Party Services",
    paragraphs: [
      "We use reputable service providers for website hosting and for storing enquiry submissions. These providers process data on our behalf and are not permitted to use it for their own purposes.",
    ],
  },
  {
    heading: "9. Data Security",
    paragraphs: [
      "Enquiry data is stored with access controls so that submissions are not publicly readable. While no system can be guaranteed to be completely secure, we take reasonable measures to protect the information you share.",
    ],
  },
  {
    heading: "10. Data Retention",
    paragraphs: [
      "We retain enquiry information for as long as it is needed to respond to your requirement and maintain our business records, after which it is deleted or anonymised.",
    ],
  },
  {
    heading: "11. User Rights",
    paragraphs: [
      "You may ask us what information we hold about you, request corrections, or ask us to delete your enquiry details. Contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "12. Children's Privacy",
    paragraphs: [
      "This website is intended for adults. We do not knowingly collect information from children.",
    ],
  },
  {
    heading: "13. Policy Updates",
    paragraphs: [
      "We may update this policy as our services or legal obligations change. The version published on this page is the current one.",
    ],
  },
  {
    heading: "14. Contact Information",
    paragraphs: [
      "Heaven Homes & Realty, 207, Blue Eminence, Opp. Sangini Gardenia, Jahangirabad, Surat, Gujarat – 395009, India. You can also reach us using the enquiry form on this website.",
    ],
  },
];

export const Route = createFileRoute("/privacy-policy")({
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
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we handle the information you share with Heaven Homes & Realty when you submit a property enquiry."
      sections={SECTIONS}
    />
  );
}
