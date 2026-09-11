"use client";

import type React from "react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  CheckCircle,
  Loader2,
  Send,
  Clock,
  Lock,
  Globe,
  AlertCircle,
  Heart,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useContactForm } from "@/hooks/use-contact-form";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const {
    isLoading,
    isSuccess,
    error,
    isRateLimited,
    messageText,
    setMessageText,
    handleSubmit,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1360px] px-margin py-space-3xl md:px-margin-tablet lg:px-margin-desktop"
    >
      <div className="border-surface-container-high/70 overflow-hidden rounded-2xl border bg-surface-container-low p-space-lg shadow-md md:p-space-2xl">
        <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
          {/* Left Column: Dialogue & Channels */}
          <div className="flex flex-col gap-space-md lg:col-span-5">
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
                06 // Dialogue
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg leading-tight text-primary">
              <span className="sr-only">Let's Work Together: </span>
              Have a project in mind, or need a developer who cares deeply about
              execution?
            </h2>

            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Whether you need a complete full-stack web application from
              scratch, performance consulting, or dedicated architectural
              reinforcement for your team, my inbox is open.
            </p>

            <div className="flex flex-col gap-space-sm pt-space-sm">
              {/* Direct Email */}
              <div className="shadow-xs border-surface-container-high/60 flex items-center gap-space-sm rounded-xl border bg-surface p-space-md">
                <div className="rounded-lg bg-surface-container p-2 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Direct Email Channel
                  </span>
                  <a
                    href="mailto:contact@shahilahamad.com.np"
                    className="font-body-md text-body-md font-semibold text-primary hover:underline"
                  >
                    contact@shahilahamad.com.np
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="shadow-xs border-surface-container-high/60 flex items-center gap-space-sm rounded-xl border bg-surface p-space-md">
                <div className="rounded-lg bg-surface-container p-2 text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Availability
                  </span>
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    Open for Full-Stack Engagements
                  </span>
                </div>
              </div>

              {/* Response Cadence */}
              <div className="shadow-xs border-surface-container-high/60 flex items-center gap-space-sm rounded-xl border bg-surface p-space-md">
                <div className="rounded-lg bg-surface-container p-2 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                    Typical Response Cadence
                  </span>
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    Within 12 to 24 hours
                  </span>
                </div>
              </div>

              {/* Direct Social Links */}
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <a
                  href="https://github.com/Shahil-Ahamad-Per"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-surface-container-high bg-surface px-3 py-1.5 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>github.com/Shahil-Ahamad-Per</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shahil-ahamad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-surface-container-high bg-surface px-3 py-1.5 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container hover:text-primary"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>linkedin.com/in/shahil-ahamad</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form & Overlays */}
          <div className="border-surface-container-high/70 relative rounded-xl border bg-surface p-space-lg shadow-sm lg:col-span-7">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="bg-surface/95 animate-fadeIn absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                  Message Sent!
                </h3>
                <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                  Thank you for reaching out! I've received your message and
                  will get back to you as soon as possible.
                </p>
              </div>
            )}

            {/* Rate Limit Overlay */}
            {isRateLimited && (
              <div className="bg-surface/95 animate-fadeIn absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                  Wow, you're awesome!
                </h3>
                <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                  I see you've sent me 5 messages today! Thank you so much for
                  your enthusiasm. Please feel free to reach out again tomorrow.
                </p>
              </div>
            )}

            <form
              ref={form}
              onSubmit={(e) => handleSubmit(e, form)}
              className="flex flex-col gap-space-md"
              id="portfolio-contact-form"
            >
              <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-label-md text-label-md font-semibold text-on-surface"
                  >
                    Full Name <span className="text-error">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    required
                    disabled={isLoading || isRateLimited}
                    placeholder="e.g. Elena Rostova"
                    className="shadow-xs rounded-lg border-surface-container-high bg-surface-container-low px-space-md py-2.5 font-body-md text-body-md text-on-surface transition-all focus:bg-surface focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-label-md text-label-md font-semibold text-on-surface"
                  >
                    Email Address <span className="text-error">*</span>
                  </label>
                  <Input
                    id="contact-email"
                    name="reply_to"
                    type="email"
                    required
                    disabled={isLoading || isRateLimited}
                    placeholder="e.g. elena@company.com"
                    className="shadow-xs rounded-lg border-surface-container-high bg-surface-container-low px-space-md py-2.5 font-body-md text-body-md text-on-surface transition-all focus:bg-surface focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-label-md text-label-md font-semibold text-on-surface"
                >
                  Subject / Project Scope <span className="text-error">*</span>
                </label>
                <Input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  disabled={isLoading || isRateLimited}
                  placeholder="e.g. Full-Stack Web Platform Development"
                  className="shadow-xs rounded-lg border-surface-container-high bg-surface-container-low px-space-md py-2.5 font-body-md text-body-md text-on-surface transition-all focus:bg-surface focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact-message"
                    className="font-label-md text-label-md font-semibold text-on-surface"
                  >
                    Your Message <span className="text-error">*</span>
                  </label>
                  <span
                    className={`font-label-sm text-label-sm ${
                      messageText.length >= 300
                        ? "font-bold text-red-500"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {messageText.length}/300
                  </span>
                </div>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={300}
                  rows={4}
                  disabled={isLoading || isRateLimited}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Tell me about your product, timeline, current constraints, and goals..."
                  className="shadow-xs resize-none rounded-lg border-surface-container-high bg-surface-container-low px-space-md py-2.5 font-body-md text-body-md text-on-surface transition-all focus:bg-surface focus:outline-none"
                />
              </div>

              {error && (
                <div className="shadow-xs animate-fadeIn flex items-center gap-space-sm rounded-lg bg-error-container p-space-md text-on-error-container">
                  <AlertCircle className="h-5 w-5 shrink-0 text-error" />
                  <span className="font-body-md text-body-md">{error}</span>
                </div>
              )}

              <div className="flex flex-col items-center justify-between gap-space-md pt-space-xs sm:flex-row">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  <Lock className="h-3.5 w-3.5 text-primary" />
                  <span>Direct, confidential dispatch to Shahil.</span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || isRateLimited}
                  aria-label="Send Message"
                  className="inline-flex w-full items-center justify-center gap-space-xs rounded-lg bg-primary px-space-xl py-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:text-on-primary-container disabled:opacity-50 sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Dispatch Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
