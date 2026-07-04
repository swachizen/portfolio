"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { COUNTRIES } from "@/lib/country";
import { SERVICE_TOPICS } from "@/lib/service";

type FormData = {
  email: string;
  fullNames: string;
  company: string;
  selfEmployed: boolean;
  country: string;
  county: string;
  countryCode: string;
  phone: string;
  serviceTopic: string;
  service: string;
  message: string;
  website: string; // Honeypot
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FULL_NAME_REGEX = /^[A-Z][a-zA-Z]+$/;
const COMPANY_REGEX = /^[A-Za-z0-9]+(?:[ .][A-Za-z0-9]+)*$/;
const ONLY_NUMBERS_REGEX = /^\d+$/;
const MAX_MESSAGE_WORDS = 150;

const INITIAL_FORM: FormData = {
  email: "",
  fullNames: "",
  company: "",
  selfEmployed: false,
  country: "",
  county: "",
  countryCode: "",
  phone: "",
  serviceTopic: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedCountry = useMemo(
    () => COUNTRIES.find((country) => country.name === form.country),
    [form.country],
  );

  const selectedTopic = useMemo(
    () => SERVICE_TOPICS.find((topic) => topic.topic === form.serviceTopic),
    [form.serviceTopic],
  );

  const availableCounties = selectedCountry?.counties ?? [];
  const availableServices = selectedTopic?.services ?? [];

  useEffect(() => {
    if (!selectedCountry) return;
    setForm((prev) => ({
      ...prev,
      countryCode: selectedCountry.dialCode,
    }));
  }, [selectedCountry]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, county: "" }));
  }, [form.country]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, service: "" }));
  }, [form.serviceTopic]);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validateEmail(value: string): string {
    if (!value.trim()) return "Email is required.";
    if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
    return "";
  }

  function validateFullNames(value: string): string {
    const names = value.trim().split(/\s+/).filter(Boolean);
    if (!value.trim()) return "Full names are required.";
    if (names.length < 2) return "Minimum of 2 names required.";
    if (names.length > 3) return "Maximum of 3 names allowed.";
    const invalidName = names.find((name) => !FULL_NAME_REGEX.test(name));
    if (invalidName) return "Each name must start with a capital letter and contain letters only.";
    return "";
  }

  function validateCompany(value: string, selfEmployed: boolean): string {
    if (selfEmployed) return "";
    if (!value.trim()) return "Company name is required.";
    const words = value.trim().split(/\s+/);
    if (words.length > 4) return "Maximum of 4 company names allowed.";
    if (!COMPANY_REGEX.test(value)) return "Only letters, numbers, spaces and abbreviation full stops are allowed.";
    return "";
  }

  function validateCountry(value: string): string {
    if (!value) return "Please select a country.";
    return "";
  }

  function validateCounty(value: string): string {
    if (!value) return "Please select a county or town.";
    return "";
  }

  function validatePhone(value: string): string {
    if (!value.trim()) return "Phone number is required.";
    if (!ONLY_NUMBERS_REGEX.test(value)) return "Only numbers are allowed.";
    if (selectedCountry?.phoneRegex && !selectedCountry.phoneRegex.test(value)) {
      return `Invalid ${selectedCountry.name} phone number.`;
    }
    return "";
  }

  function validateServiceTopic(value: string): string {
    if (!value) return "Please select a service topic.";
    return "";
  }

  function validateService(value: string): string {
    if (!value) return "Please select a service.";
    return "";
  }

  function validateMessage(value: string): string {
    const words = value.trim().split(/\s+/).filter(Boolean).length;
    if (!value.trim()) return "Message is required.";
    if (words > MAX_MESSAGE_WORDS) return `Maximum ${MAX_MESSAGE_WORDS} words allowed.`;
    return "";
  }

  function validateForm() {
    const nextErrors: FormErrors = {
      email: validateEmail(form.email),
      fullNames: validateFullNames(form.fullNames),
      company: validateCompany(form.company, form.selfEmployed),
      country: validateCountry(form.country),
      county: validateCounty(form.county),
      phone: validatePhone(form.phone),
      serviceTopic: validateServiceTopic(form.serviceTopic),
      service: validateService(form.service),
      message: validateMessage(form.message),
    };

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  }

  useEffect(() => {
    setErrors((prev) => ({
      ...prev,
      email: form.email.length > 0 ? validateEmail(form.email) : "",
      fullNames: form.fullNames.length > 0 ? validateFullNames(form.fullNames) : "",
      company: form.company.length > 0 || form.selfEmployed ? validateCompany(form.company, form.selfEmployed) : "",
      phone: form.phone.length > 0 ? validatePhone(form.phone) : "",
      message: form.message.length > 0 ? validateMessage(form.message) : "",
    }));
  }, [
    form.email,
    form.fullNames,
    form.company,
    form.selfEmployed,
    form.phone,
    form.message,
    selectedCountry,
  ]);

  const messageWordCount = useMemo(
    () => form.message.trim().split(/\s+/).filter(Boolean).length,
    [form.message],
  );

  const isFormValid = useMemo(() => {
    return (
      form.email &&
      form.fullNames &&
      (form.selfEmployed || form.company) &&
      form.country &&
      form.county &&
      form.countryCode &&
      form.phone &&
      form.serviceTopic &&
      form.service &&
      form.message &&
      !Object.values(errors).some(Boolean)
    );
  }, [form, errors]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the highlighted fields.");
      return;
    }

    if (form.website.trim()) {
      toast.error("Security validation failed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.trim(),
          fullNames: form.fullNames.trim(),
          company: form.selfEmployed ? "Self Employed" : form.company.trim(),
          selfEmployed: form.selfEmployed,
          country: form.country,
          county: form.county,
          countryCode: form.countryCode,
          phone: form.phone.trim(),
          serviceTopic: form.serviceTopic,
          service: form.service,
          message: form.message.trim(),
          website: form.website,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit request.");
      }

      toast.success("Message sent successfully. I will get back to you soon.");
      setForm(INITIAL_FORM);
      setErrors({});

    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8" aria-label="Contact form">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => updateField("website", event.target.value)}
        className="absolute -z-50 m-0 h-0 w-0 border-0 p-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground ml-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="swaleh@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500 ml-2">
              {errors.email}
            </p>
          )}
        </div>

        {/* Full Names */}
        <div className="space-y-2">
          <label htmlFor="fullNames" className="text-sm font-medium text-foreground ml-2">
            Full Names
          </label>
          <input
            id="fullNames"
            name="fullNames"
            type="text"
            autoComplete="name"
            value={form.fullNames}
            onChange={(event) => updateField("fullNames", event.target.value)}
            placeholder="Swaleh Mohamad"
            aria-invalid={!!errors.fullNames}
            aria-describedby={errors.fullNames ? "fullname-error" : undefined}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          {errors.fullNames && (
            <p id="fullname-error" className="text-sm text-red-500 ml-2">
              {errors.fullNames}
            </p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3 ml-2">
            <input
              id="self-employed"
              type="checkbox"
              checked={form.selfEmployed}
              onChange={(event) => updateField("selfEmployed", event.target.checked)}
              className="h-4 w-4 rounded-sm border-border text-primary focus:ring-primary"
            />
            <label htmlFor="self-employed" className="text-sm text-foreground">
              Self Employed
            </label>
          </div>

          {!form.selfEmployed && (
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground ml-2">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="ABC Technologies Ltd."
                aria-invalid={!!errors.company}
                className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              {errors.company && <p className="text-sm text-red-500 ml-2">{errors.company}</p>}
            </div>
          )}
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-foreground ml-2">
            Country
          </label>
          <select
            id="country"
            value={form.country}
            onChange={(event) => updateField("country", event.target.value)}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground focus:border-primary focus:outline-none appearance-none"
          >
            <option value="">Select Country</option>
            {COUNTRIES.map((country) => (
              <option key={country.name} value={country.name}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-sm text-red-500 ml-2">{errors.country}</p>}
        </div>

        {/* County */}
        <div className="space-y-2">
          <label htmlFor="county" className="text-sm font-medium text-foreground ml-2">
            County / Town
          </label>
          <select
            id="county"
            value={form.county}
            disabled={!form.country}
            onChange={(event) => updateField("county", event.target.value)}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground disabled:opacity-50 focus:border-primary focus:outline-none appearance-none"
          >
            <option value="">Select County / Town</option>
            {availableCounties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
          {errors.county && <p className="text-sm text-red-500 ml-2">{errors.county}</p>}
        </div>

        {/* Country Code */}
        <div className="space-y-2">
          <label htmlFor="countryCode" className="text-sm font-medium text-foreground ml-2">
            Country Code
          </label>
          <input
            id="countryCode"
            type="text"
            value={selectedCountry ? `${selectedCountry.flag} ${selectedCountry.dialCode}` : ""}
            readOnly
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground focus:outline-none opacity-70"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground ml-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="712345678"
            aria-invalid={!!errors.phone}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          {errors.phone && <p className="text-sm text-red-500 ml-2">{errors.phone}</p>}
        </div>

        {/* Service Topic */}
        <div className="space-y-2">
          <label htmlFor="serviceTopic" className="text-sm font-medium text-foreground ml-2">
            Service Topic
          </label>
          <select
            id="serviceTopic"
            value={form.serviceTopic}
            onChange={(event) => updateField("serviceTopic", event.target.value)}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground focus:border-primary focus:outline-none appearance-none"
          >
            <option value="">Select Topic</option>
            {SERVICE_TOPICS.map((topic) => (
              <option key={topic.topic} value={topic.topic}>
                {topic.topic}
              </option>
            ))}
          </select>
          {errors.serviceTopic && <p className="text-sm text-red-500 ml-2">{errors.serviceTopic}</p>}
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground ml-2">
            Service
          </label>
          <select
            id="service"
            value={form.service}
            disabled={!form.serviceTopic}
            onChange={(event) => updateField("service", event.target.value)}
            className="w-full rounded-full border border-border bg-transparent px-4 py-3 text-foreground disabled:opacity-50 focus:border-primary focus:outline-none appearance-none"
          >
            <option value="">Select Service</option>
            {availableServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-sm text-red-500 ml-2">{errors.service}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="flex items-center justify-between ml-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <span className={`text-xs ${messageWordCount > MAX_MESSAGE_WORDS ? "text-red-500" : "text-muted-foreground"}`}>
            {messageWordCount}/{MAX_MESSAGE_WORDS}
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Describe your project, goals, requirements and expected outcomes..."
          aria-invalid={!!errors.message}
          className="w-full resize-none rounded-[24px] border border-border bg-transparent px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
        {errors.message && <p className="text-sm text-red-500 ml-2">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-foreground px-8 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          )}
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

