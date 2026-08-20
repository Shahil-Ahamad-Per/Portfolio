"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-100/50 dark:bg-slate-800/50"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-10 sm:mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="group flex justify-center">
            <div className="w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 rounded-2xl bg-gradient-to-br from-sage-200 to-sage-400 dark:from-slate-700 dark:to-slate-800 p-2 shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Shahil Ahamad"
                className="rounded-xl w-full h-full object-cover shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <p className="text-base sm:text-lg text-charcoal-700 dark:text-slate-200 leading-relaxed hover:text-charcoal-800 dark:hover:text-slate-100 transition-colors duration-300">
              I'm Shahil Ahamad, a passionate full-stack developer who loves
              creating digital solutions that combine beautiful design with
              robust functionality. I believe in writing clean, maintainable
              code and crafting user experiences that truly make a difference.
            </p>

            <p className="text-base sm:text-lg text-charcoal-700 dark:text-slate-200 leading-relaxed hover:text-charcoal-800 dark:hover:text-slate-100 transition-colors duration-300">
              My expertise spans modern JavaScript frameworks, backend
              technologies, and database management. I'm constantly learning and
              exploring new technologies to stay at the forefront of web
              development.
            </p>

            <p className="text-base sm:text-lg text-charcoal-700 dark:text-slate-200 leading-relaxed hover:text-charcoal-800 dark:hover:text-slate-100 transition-colors duration-300">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge through
              technical writing and mentoring fellow developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
