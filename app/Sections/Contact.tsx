"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react"
import emailjs from 'emailjs-com'

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateIDToYou = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    // const templateIDToSender = process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID || ''
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    try {
      // Send email to you
      const response = await emailjs.sendForm(
        serviceID,
        templateIDToYou,
        form.current!,
        userID
      )

      // Send confirmation email to sender
      // if (form.current) {
      //   const senderEmail = form.current.querySelector<HTMLInputElement>('input[name="reply_to"]')?.value
      //   const senderName = form.current.querySelector<HTMLInputElement>('input[name="from_name"]')?.value

      //   await emailjs.send(
      //     serviceID,
      //     templateIDToSender,
      //     {
      //       to_email: senderEmail,
      //       from_name: 'Shahil Ahamad',
      //       sender_name: senderName,
      //     },
      //     userID
      //   )
      // }

      setIsSuccess(true)
      form.current?.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)

    } catch (err) {
      setError('Failed to send message. Please try again later.')
      console.error('Email send error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-cream-100/50 dark:bg-slate-800/50 relative overflow-hidden">


      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-charcoal-800 dark:text-slate-100 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
              Get In Touch
            </h3>
            <p className="text-lg text-charcoal-700 dark:text-slate-200 leading-relaxed hover:text-charcoal-800 dark:hover:text-slate-100 transition-colors duration-300">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:shahilahamad04@gmail.com"
                target="_blank"
                className="flex items-center space-x-3 hover:scale-105 hover:translate-x-2 transition-all duration-300 group cursor-pointer"
                rel="noreferrer"
              >
                <Mail className="h-5 w-5 text-sage-600 dark:text-gold-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-charcoal-700 dark:text-slate-200 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                  shahilahamad04@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-3 hover:scale-105 hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <Github className="h-5 w-5 text-sage-600 dark:text-gold-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-charcoal-700 dark:text-slate-200 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                  <a href="https://github.com/Shahil-Ahamad-Per" target="_blank" rel="noopener noreferrer">
                    github.com/Shahil-Ahamad-Per
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3 hover:scale-105 hover:translate-x-2 transition-all duration-300 group cursor-pointer">
                <Linkedin className="h-5 w-5 text-sage-600 dark:text-gold-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-charcoal-700 dark:text-slate-200 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                  <a href="https://linkedin.com/in/shahil-ahamad" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/shahil-ahamad
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className={`transition-all duration-500 ${isSuccess ? "scale-105" : ""}`}>
            {isSuccess && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-lg">
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-sage-600 dark:text-gold-400 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-semibold text-sage-700 dark:text-gold-300">Message Sent!</h3>
                  <p className="text-sage-600 dark:text-gold-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              </div>
            )}


            <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <Input
                  name="from_name"
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="reply_to"
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  disabled={isLoading}
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {error && <div className="text-red-600 dark:text-red-400 text-sm text-center">{error}</div>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 text-lg font-medium rounded-md transition-all duration-300 bg-sage-600 hover:bg-sage-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-amber-500 focus:ring-offset-2"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
