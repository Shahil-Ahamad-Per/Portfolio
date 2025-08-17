import { Button, Input, Textarea } from "@portfolio/frontend/ui"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
       <section id="contact" className="py-20 px-6 bg-cream-100/50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
            Let's Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-charcoal-800 dark:text-slate-100 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
                Get In Touch
              </h3>
              <p className="text-lg text-charcoal-700 dark:text-slate-200 leading-relaxed hover:text-charcoal-800 dark:hover:text-slate-100 transition-colors duration-300">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hello, feel free to reach out!
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
                      {" "}
                      github.com/Shahil-Ahamad-Per
                    </a>{" "}
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

            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-cream-50 dark:bg-slate-700 border-sage-200 dark:border-slate-600 text-charcoal-800 dark:text-slate-100 focus:scale-105 focus:border-sage-400 dark:focus:border-gold-500 hover:border-sage-300 dark:hover:border-gold-600 transition-all duration-300"
                />
              </div>
              <Button className="w-full bg-sage-600 hover:bg-sage-700 dark:bg-gold-600 dark:hover:bg-gold-700 text-white py-3 text-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
  )
}
