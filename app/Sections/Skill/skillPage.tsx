import { skills } from "@/app/Sections/Skill/skillsIcons";

function renderSkillIcon(skill: (typeof skills)[number]) {
  if (!skill.image) {
    return (
      <span className="text-lg font-bold text-white">
        {skill.name.charAt(0)}
      </span>
    );
  }

  if (
    typeof skill.image === "string" &&
    skill.image.trim().startsWith("<svg")
  ) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        dangerouslySetInnerHTML={{ __html: skill.image }}
      />
    );
  }

  return (
    <img
      src={skill.image || "/placeholder.svg"}
      alt={skill.name}
      className="h-full w-full object-contain"
      loading="lazy"
    />
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal-800 transition-colors duration-300 hover:text-sage-600 dark:text-slate-100 dark:hover:text-gold-400 sm:mb-16 sm:text-4xl md:text-5xl">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer flex-col items-center rounded-2xl border border-sage-200 bg-cream-50 p-3.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-sage-400 hover:shadow-xl active:scale-95 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-gold-500 sm:p-6 sm:hover:-translate-y-2 sm:hover:scale-110"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12 sm:group-hover:scale-125">
                {renderSkillIcon(skill)}
              </div>
              <h3 className="mb-0.5 text-center text-xs font-semibold text-charcoal-800 transition-colors duration-300 group-hover:text-sage-600 dark:text-slate-100 dark:group-hover:text-gold-400 sm:text-sm">
                {skill.name}
              </h3>
              <span className="text-center text-[10px] text-charcoal-600 dark:text-slate-400 sm:text-xs">
                {skill.category}
              </span>
            </a>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {[
            {
              category: "Frontend",
              skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
            },
            {
              category: "Backend",
              skills: ["Node.js", "Express.js", "GraphQL", "Prisma"],
            },
            { category: "Database", skills: ["MongoDB", "MySQL"] },
            {
              category: "DevOps & Tools",
              skills: [
                "Docker",
                "Git",
                "GitHub",
                "Linux",
                "Vercel",
                "Cloudflare",
              ],
            },
          ].map((group) => (
            <div
              key={group.category}
              className="group rounded-2xl border border-sage-200 bg-cream-100/50 p-5 transition-all duration-300 hover:shadow-lg dark:border-slate-600 dark:bg-slate-700/50 sm:p-6"
            >
              <h3 className="mb-3 font-serif text-base font-semibold text-charcoal-800 transition-colors duration-300 group-hover:text-sage-600 dark:text-slate-100 dark:group-hover:text-gold-400 sm:mb-4 sm:text-lg">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center text-xs text-charcoal-700 transition-colors duration-300 group-hover:text-charcoal-800 dark:text-slate-300 dark:group-hover:text-slate-200 sm:text-sm"
                  >
                    <div className="mr-2.5 h-1.5 w-1.5 rounded-full bg-sage-500 transition-transform duration-300 group-hover:scale-125 dark:bg-gold-500"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
