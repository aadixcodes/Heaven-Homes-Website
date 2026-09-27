import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";

const PROPERTY_TYPES = ["Residential", "Commercial", "Land / Plot", "Other"];
const REQUIREMENT_TYPES = ["Buy", "Sell", "Resale", "Rent", "Other"];
const BUDGETS = [
  "Under ₹25 Lakhs",
  "₹25 Lakhs – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹2 Crore",
  "₹2 Crore+",
  "Prefer to Discuss",
];
const PURPOSES = ["Personal Use", "Investment", "Business", "Rental", "Other"];

const fieldClass =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground shadow-[var(--shadow-soft)] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
const labelClass =
  "block text-left text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

function Select({
  id,
  label,
  placeholder,
  options,
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <select id={id} name={id} required={required} defaultValue="" className={`${fieldClass} mt-2`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    const { error } = await supabase.from("enquiries").insert({
      preferred_location: String(data.get("preferred_location") ?? "").trim() || null,
      property_type: String(data.get("property_type") ?? "") || null,
      requirement_type: String(data.get("requirement_type") ?? "") || null,
      budget: String(data.get("budget") ?? "") || null,
      purpose: String(data.get("purpose") ?? "") || null,
      full_name: String(data.get("full_name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim() || null,
    });

    if (error) {
      setStatus("error");
      setErrorMessage("We couldn't send your enquiry just now. Please try again.");
      return;
    }

    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="card-premium mx-auto flex max-w-xl flex-col items-center px-6 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald" strokeWidth={1.4} />
        <h3 className="mt-5 font-display text-2xl text-foreground">Enquiry received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for sharing your requirement. Our team will review it and get in
          touch with you.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-premium p-6 sm:p-9 lg:p-10" noValidate={false}>
      <fieldset disabled={status === "sending"} className="space-y-10">
        <div>
          <legend className="eyebrow-dark">Property Requirement</legend>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="preferred_location">
                Preferred Location
              </label>
              <input
                id="preferred_location"
                name="preferred_location"
                type="text"
                placeholder="Where are you looking for a property?"
                className={`${fieldClass} mt-2`}
              />
            </div>
            <Select
              id="property_type"
              label="Property Requirement"
              placeholder="Select Property Type"
              options={PROPERTY_TYPES}
            />
            <Select
              id="requirement_type"
              label="Requirement Type"
              placeholder="Select Requirement Type"
              options={REQUIREMENT_TYPES}
            />
            <Select
              id="budget"
              label="Budget"
              placeholder="Select Budget Range"
              options={BUDGETS}
            />
            <Select
              id="purpose"
              label="Purpose"
              placeholder="Select Purpose"
              options={PURPOSES}
            />
          </div>
        </div>

        <div>
          <legend className="eyebrow-dark">Personal Information</legend>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="full_name">
                Full Name *
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your full name"
                className={`${fieldClass} mt-2`}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={`${fieldClass} mt-2`}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="phone">
                Contact Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="Your contact number"
                className={`${fieldClass} mt-2`}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="message">
                Additional Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us more about your requirements..."
                className={`${fieldClass} mt-2 resize-y`}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          {status === "error" && (
            <p role="alert" className="text-sm text-destructive">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-bright disabled:opacity-70 sm:w-auto"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sending" ? "Sending…" : "Submit Property Enquiry"}
          </button>
          <p className="text-xs text-muted-foreground">
            Your information is used only to respond to your enquiry.
          </p>
        </div>
      </fieldset>
    </form>
  );
}
