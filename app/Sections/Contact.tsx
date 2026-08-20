"use client";

import type React from "react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
  Send,
  Clock,
} from "lucide-react";
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
      className="py-16 sm:py-24 px-4 sm:px-6 bg-cream-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-200 dark:via-slate-700 to-transparent"></div>
      <div className="hidden sm:block absolute -top-24 -right-24 w-96 h-96 bg-sage-200/20 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="hidden sm:block absolute -bottom-24 -left-24 w-96 h-96 bg-sage-300/20 dark:bg-slate-800/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal-900 dark:text-slate-100 mb-3 sm:mb-4 inline-block relative group">
            Let's Work Together
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-sage-500 dark:bg-gold-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </h2>
          <p className="text-charcoal-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-lg px-2">
            Ready to bring your ideas to life? I'm currently available for
            freelance work and full-time opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE CONTACT INFO */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-sage-100 dark:border-slate-700 shadow-sm h-full">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-charcoal-900 dark:text-slate-100 mb-5 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:contact@shahilahamad.com.np"
                  target="_blank"
                  className="flex items-start space-x-3.5 sm:space-x-4 group cursor-pointer p-2.5 sm:p-3 -m-2.5 sm:-m-3 rounded-xl hover:bg-sage-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                  rel="noreferrer"
                >
                  <div className="bg-sage-100 dark:bg-slate-700 p-2.5 sm:p-3 rounded-xl text-sage-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-charcoal-500 dark:text-slate-400 mb-0.5">
                      Email
                    </p>
                    <p className="text-sm sm:text-base text-charcoal-800 dark:text-slate-200 font-medium group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors break-all">
                      contact@shahilahamad.com.np
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Shahil-Ahamad-Per"
                  target="_blank"
                  className="flex items-start space-x-3.5 sm:space-x-4 group cursor-pointer p-2.5 sm:p-3 -m-2.5 sm:-m-3 rounded-xl hover:bg-sage-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                  rel="noreferrer"
                >
                  <div className="bg-sage-100 dark:bg-slate-700 p-2.5 sm:p-3 rounded-xl text-sage-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-charcoal-500 dark:text-slate-400 mb-0.5">
                      GitHub
                    </p>
                    <p className="text-sm sm:text-base text-charcoal-800 dark:text-slate-200 font-medium group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors break-all">
                      github.com/Shahil-Ahamad-Per
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/shahil-ahamad"
                  target="_blank"
                  className="flex items-start space-x-3.5 sm:space-x-4 group cursor-pointer p-2.5 sm:p-3 -m-2.5 sm:-m-3 rounded-xl hover:bg-sage-50 dark:hover:bg-slate-700/50 transition-colors duration-300"
                  rel="noreferrer"
                >
                  <div className="bg-sage-100 dark:bg-slate-700 p-2.5 sm:p-3 rounded-xl text-sage-600 dark:text-gold-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-charcoal-500 dark:text-slate-400 mb-0.5">
                      LinkedIn
                    </p>
                    <p className="text-sm sm:text-base text-charcoal-800 dark:text-slate-200 font-medium group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors break-all">
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
              className={`transition-all duration-500 bg-white dark:bg-slate-800 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-sage-100 dark:border-slate-700 relative overflow-hidden h-full ${isSuccess ? "scale-[1.02] shadow-2xl" : ""}`}
            >
              {/* SUCCESS OVERLAY */}
              {isSuccess && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl animate-in fade-in duration-500">
                  <div className="text-center p-6 sm:p-8 max-w-sm transform transition-all animate-in zoom-in-95 duration-500 delay-100">
                    <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-green-200 dark:bg-green-900/50 rounded-full animate-ping opacity-75 duration-1000"></div>
                      <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-green-100 dark:bg-green-800/80 rounded-full border-4 border-white dark:border-slate-700 shadow-xl">
                        <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 dark:text-slate-100 mb-3 tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      Thank you for reaching out. I've received your message and
                      will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}

              {/* RATE LIMIT OVERLAY */}
              {isRateLimited && !isSuccess && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-sage-50/95 dark:bg-slate-800/95 backdrop-blur-xl animate-in fade-in duration-500">
                  <div className="text-center p-6 sm:p-8 max-w-sm transform transition-all">
                    <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-sage-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-inner">
                      <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-sage-600 dark:text-gold-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-charcoal-900 dark:text-slate-100 mb-3">
                      Wow, you're awesome!
                    </h3>
                    <p className="text-charcoal-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
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
                className="space-y-4 sm:space-y-6 relative h-full flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-sm font-medium text-charcoal-700 dark:text-slate-300 ml-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    disabled={isLoading || isRateLimited}
                    className="bg-cream-50/50 dark:bg-slate-900/50 border-sage-200 dark:border-slate-600 text-charcoal-900 dark:text-slate-100 focus:ring-2 focus:ring-sage-400/20 focus:border-sage-400 dark:focus:ring-gold-500/20 dark:focus:border-gold-500 transition-all duration-300 disabled:opacity-50 h-11 sm:h-12 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-sm font-medium text-charcoal-700 dark:text-slate-300 ml-1"
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
                    className="bg-cream-50/50 dark:bg-slate-900/50 border-sage-200 dark:border-slate-600 text-charcoal-900 dark:text-slate-100 focus:ring-2 focus:ring-sage-400/20 focus:border-sage-400 dark:focus:ring-gold-500/20 dark:focus:border-gold-500 transition-all duration-300 disabled:opacity-50 h-11 sm:h-12 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-1 flex-grow flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-sm font-medium text-charcoal-700 dark:text-slate-300 ml-1 mb-1 block"
                  >
                    Your Message
                  </label>
                  <div className="relative flex-grow flex flex-col">
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
                      className="bg-cream-50/50 dark:bg-slate-900/50 border-sage-200 dark:border-slate-600 text-charcoal-900 dark:text-slate-100 focus:ring-2 focus:ring-sage-400/20 focus:border-sage-400 dark:focus:ring-gold-500/20 dark:focus:border-gold-500 transition-all duration-300 disabled:opacity-50 rounded-xl resize-y min-h-[110px] max-h-[250px] py-3 pb-8 flex-grow text-sm"
                    />
                    <div className="absolute bottom-2.5 right-3 flex items-center pointer-events-none opacity-60">
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
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-xs sm:text-sm text-center border border-red-100 dark:border-red-800/30 mt-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || isRateLimited}
                  className="w-full mt-4 sm:mt-6 py-3 sm:py-4 px-6 h-12 sm:h-14 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 bg-sage-600 hover:bg-sage-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white hover:shadow-lg active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sage-500 dark:focus:ring-amber-500 flex items-center justify-center space-x-2 shadow-md"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
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
