"use client";

import type React from "react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle, Loader2, Send, Clock } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useContactForm } from "@/hooks/use-contact-form";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
      className="relative overflow-hidden bg-cream-50 px-4 py-16 dark:bg-slate-900 sm:px-6 sm:py-24"
    >
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-sage-200 to-transparent dark:via-slate-700"></div>
      <div className="pointer-events-none absolute -right-24 -top-24 hidden h-96 w-96 rounded-full bg-sage-200/20 blur-3xl dark:bg-amber-900/10 sm:block"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 hidden h-96 w-96 rounded-full bg-sage-300/20 blur-3xl dark:bg-slate-800/50 sm:block"></div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="group relative mb-3 inline-block font-serif text-3xl font-bold text-charcoal-900 dark:text-slate-100 sm:mb-4 sm:text-4xl md:text-5xl">
            {"Let's Work Together"}
            <span className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-sage-500 transition-all duration-300 group-hover:w-full dark:bg-gold-500" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm text-charcoal-600 dark:text-slate-400 sm:text-lg">
            Ready to bring your ideas to life? I'm currently available for
            freelance work and full-time opportunities.
          </p>
        </div>

        <div className="grid items-start gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
          {/* LEFT SIDE CONTACT INFO */}
          <div className="space-y-6 sm:space-y-8">
            <div className="h-full rounded-2xl border border-sage-100 bg-white/60 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/60 sm:p-8">
              <h3 className="mb-5 font-serif text-xl font-semibold text-charcoal-900 dark:text-slate-100 sm:mb-6 sm:text-2xl">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:contact@shahilahamad.com.np"
                  target="_blank"
                  className="group -m-2.5 flex cursor-pointer items-start space-x-3.5 rounded-xl p-2.5 transition-colors duration-300 hover:bg-sage-50 dark:hover:bg-slate-700/50 sm:-m-3 sm:space-x-4 sm:p-3"
                  rel="noreferrer"
                >
                  <div className="shrink-0 rounded-xl bg-sage-100 p-2.5 text-sage-600 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-700 dark:text-gold-400 sm:p-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-charcoal-500 dark:text-slate-400 sm:text-sm">
                      Email
                    </p>
                    <p className="break-all text-sm font-medium text-charcoal-800 transition-colors group-hover:text-sage-600 dark:text-slate-200 dark:group-hover:text-gold-400 sm:text-base">
                      contact@shahilahamad.com.np
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Shahil-Ahamad-Per"
                  target="_blank"
                  className="group -m-2.5 flex cursor-pointer items-start space-x-3.5 rounded-xl p-2.5 transition-colors duration-300 hover:bg-sage-50 dark:hover:bg-slate-700/50 sm:-m-3 sm:space-x-4 sm:p-3"
                  rel="noreferrer"
                >
                  <div className="shrink-0 rounded-xl bg-sage-100 p-2.5 text-sage-600 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-700 dark:text-gold-400 sm:p-3">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-charcoal-500 dark:text-slate-400 sm:text-sm">
                      GitHub
                    </p>
                    <p className="break-all text-sm font-medium text-charcoal-800 transition-colors group-hover:text-sage-600 dark:text-slate-200 dark:group-hover:text-gold-400 sm:text-base">
                      github.com/Shahil-Ahamad-Per
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/shahil-ahamad"
                  target="_blank"
                  className="group -m-2.5 flex cursor-pointer items-start space-x-3.5 rounded-xl p-2.5 transition-colors duration-300 hover:bg-sage-50 dark:hover:bg-slate-700/50 sm:-m-3 sm:space-x-4 sm:p-3"
                  rel="noreferrer"
                >
                  <div className="shrink-0 rounded-xl bg-sage-100 p-2.5 text-sage-600 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-700 dark:text-gold-400 sm:p-3">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium text-charcoal-500 dark:text-slate-400 sm:text-sm">
                      LinkedIn
                    </p>
                    <p className="break-all text-sm font-medium text-charcoal-800 transition-colors group-hover:text-sage-600 dark:text-slate-200 dark:group-hover:text-gold-400 sm:text-base">
                      linkedin.com/in/shahil-ahamad
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">
            <div
              className={`relative h-full overflow-hidden rounded-2xl border border-sage-100 bg-white p-5 shadow-xl transition-all duration-500 dark:border-slate-700 dark:bg-slate-800 sm:p-8 md:p-10 ${isSuccess ? "scale-[1.02] shadow-2xl" : ""}`}
            >
              {/* SUCCESS OVERLAY */}
              {isSuccess && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 backdrop-blur-xl duration-500 animate-in fade-in dark:bg-slate-800/95">
                  <div className="max-w-sm transform p-6 text-center transition-all delay-100 duration-500 animate-in zoom-in-95 sm:p-8">
                    <div className="relative mx-auto mb-6 h-20 w-20 sm:mb-8 sm:h-24 sm:w-24">
                      <div className="absolute inset-0 animate-ping rounded-full bg-green-200 opacity-75 duration-1000 dark:bg-green-900/50"></div>
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-green-100 shadow-xl dark:border-slate-700 dark:bg-green-800/80 sm:h-24 sm:w-24">
                        <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400 sm:h-12 sm:w-12" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-bold tracking-tight text-charcoal-900 dark:text-slate-100 sm:text-3xl">
                      Message Sent!
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal-600 dark:text-slate-300 sm:text-base">
                      Thank you for reaching out. I've received your message and
                      will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              {/* RATE LIMIT OVERLAY */}
              {isRateLimited && !isSuccess && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-sage-50/95 backdrop-blur-xl duration-500 animate-in fade-in dark:bg-slate-800/95">
                  <div className="max-w-sm transform p-6 text-center transition-all sm:p-8">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 shadow-inner dark:bg-slate-700 sm:mb-6 sm:h-20 sm:w-20">
                      <Clock className="h-8 w-8 text-sage-600 dark:text-gold-400 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-bold text-charcoal-900 dark:text-slate-100 sm:text-2xl">
                      Wow, you're awesome!
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-charcoal-600 dark:text-slate-300 sm:text-sm">
                      I see you've sent me 5 messages today! I have safely
                      received all of them.
                      <br />
                      <br />
                      Please be patient; I am looking forward to reading them
                      and I will contact you shortly!
                    </p>
                  </div>
                </div>
              )}

              <form
                ref={form}
                onSubmit={(e) => handleSubmit(e, form)}
                className="relative flex h-full flex-col justify-between space-y-4 sm:space-y-6"
              >
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="ml-1 text-xs font-medium text-charcoal-700 dark:text-slate-300 sm:text-sm"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isLoading || isRateLimited}
                    className="h-11 rounded-xl border-sage-200 bg-cream-50/50 text-sm text-charcoal-900 transition-all duration-300 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-gold-500 dark:focus:ring-gold-500/20 sm:h-12"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="ml-1 text-xs font-medium text-charcoal-700 dark:text-slate-300 sm:text-sm"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    disabled={isLoading || isRateLimited}
                    className="h-11 rounded-xl border-sage-200 bg-cream-50/50 text-sm text-charcoal-900 transition-all duration-300 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-gold-500 dark:focus:ring-gold-500/20 sm:h-12"
                  />
                </div>

                <div className="flex flex-grow flex-col space-y-1">
                  <label
                    htmlFor="message"
                    className="mb-1 ml-1 block text-xs font-medium text-charcoal-700 dark:text-slate-300 sm:text-sm"
                  >
                    Your Message
                  </label>
                  <div className="relative flex flex-grow flex-col">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      required
                      maxLength={300}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      ref={textareaRef}
                      disabled={isLoading || isRateLimited}
                      className="max-h-[250px] min-h-[110px] flex-grow resize-y rounded-xl border-sage-200 bg-cream-50/50 py-3 pb-8 text-sm text-charcoal-900 transition-all duration-300 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 disabled:opacity-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:focus:border-gold-500 dark:focus:ring-gold-500/20"
                    />
                    <div className="pointer-events-none absolute bottom-2.5 right-3 flex items-center opacity-60">
                      <span
                        className={`text-[11px] font-medium ${
                          messageText.length >= 300
                            ? "text-red-500"
                            : "text-charcoal-600 dark:text-slate-400"
                        }`}
                      >
                        {messageText.length}/300
                      </span>
                    </div>
                  </div>
                </div>

                {/* Web3Forms required fields for better functionality (optional) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {error && (
                  <div className="mt-3 rounded-lg border border-red-100 bg-red-50 p-3 text-center text-xs text-red-600 dark:border-red-800/30 dark:bg-red-900/20 dark:text-red-400 sm:text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || isRateLimited}
                  className="active:scale-98 mt-4 flex h-12 w-full items-center justify-center space-x-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-sage-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-500 sm:mt-6 sm:h-14 sm:py-4 sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin sm:h-5 sm:w-5" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
