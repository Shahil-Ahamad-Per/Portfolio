"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-100/50 dark:bg-slate-800/50"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-10 sm:mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          About Me
        </h2>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="md:col-span-5 group flex justify-center">
            <div className="w-64 sm:w-80 md:w-full max-w-[380px] aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sage-200 to-sage-400 dark:from-slate-700 dark:to-slate-800 p-2.5 sm:p-3 shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
              <img
                src="/profile.jpg"
                alt="Shahil Ahamad"
                className="rounded-xl sm:rounded-2xl w-full h-full object-cover shadow-inner"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 sm:space-y-5 text-center md:text-left">
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
