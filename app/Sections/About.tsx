"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-cream-100/50 px-4 py-16 dark:bg-slate-800/50 sm:px-6 sm:py-20"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal-800 transition-colors duration-300 hover:text-sage-600 dark:text-slate-100 dark:hover:text-gold-400 sm:mb-16 sm:text-4xl md:text-5xl">
          About Me
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
          <div className="group flex justify-center md:col-span-5">
            <div className="aspect-square w-64 max-w-[380px] rounded-2xl bg-gradient-to-br from-sage-200 to-sage-400 p-2.5 shadow-xl transition-all duration-500 group-hover:rotate-1 group-hover:scale-105 dark:from-slate-700 dark:to-slate-800 sm:w-80 sm:rounded-3xl sm:p-3 md:w-full">
              <img
                src="/profile.jpg"
                alt="Shahil Ahamad"
                className="h-full w-full rounded-xl object-cover shadow-inner sm:rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-4 text-center sm:space-y-5 md:col-span-7 md:text-left">
            <p className="text-base leading-relaxed text-charcoal-700 transition-colors duration-300 hover:text-charcoal-800 dark:text-slate-200 dark:hover:text-slate-100 sm:text-lg">
              I'm Shahil Ahamad, a passionate full-stack developer who loves
              creating digital solutions that combine beautiful design with
              robust functionality. I believe in writing clean, maintainable
              code and crafting user experiences that truly make a difference.
            </p>

            <p className="text-base leading-relaxed text-charcoal-700 transition-colors duration-300 hover:text-charcoal-800 dark:text-slate-200 dark:hover:text-slate-100 sm:text-lg">
              My expertise spans modern JavaScript frameworks, backend
              technologies, and database management. I'm constantly learning and
              exploring new technologies to stay at the forefront of web
              development.
            </p>

            <p className="text-base leading-relaxed text-charcoal-700 transition-colors duration-300 hover:text-charcoal-800 dark:text-slate-200 dark:hover:text-slate-100 sm:text-lg">
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
