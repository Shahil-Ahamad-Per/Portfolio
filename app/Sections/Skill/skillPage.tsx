import { skills } from "@/app/Sections/Skill/skillsIcons"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-cream-50 dark:bg-slate-800 rounded-2xl border border-sage-200 dark:border-slate-600 hover:shadow-xl hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:border-sage-400 dark:hover:border-gold-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 hover:shadow-lg">
                {skill.image ? (
                  typeof skill.image === "string" && skill.image.trim().startsWith("<svg") ? (
                    <div className="w-full h-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: skill.image }} />
                  ) : (
                    <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="w-full h-full object-contain" loading="lazy" />
                  )
                ) : (
                  <span className="text-white font-bold text-lg">{skill.name.charAt(0)}</span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-charcoal-800 dark:text-slate-100 text-center mb-1 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                {skill.name}
              </h3>
              <span className="text-xs text-charcoal-600 dark:text-slate-400 text-center group-hover:text-charcoal-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {skill.category}
              </span>
            </a>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
            { category: "Backend", skills: ["Node.js", "Express.js", "GraphQL", "Prisma"] },
            { category: "Database", skills: ["MongoDB", "MySQL"] },
            { category: "DevOps & Tools", skills: ["Docker", "Git", "GitHub", "Linux", "Vercel", "Cloudflare"] },
          ].map((group, index) => (
            <div
              key={group.category}
              className="p-6 bg-cream-100/50 dark:bg-slate-700/50 rounded-2xl border border-sage-200 dark:border-slate-600 hover:shadow-xl hover:scale-105 hover:border-sage-400 dark:hover:border-gold-500 transition-all duration-500 group"
            >
              <h3 className="text-lg font-serif font-semibold text-charcoal-800 dark:text-slate-100 mb-4 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-charcoal-700 dark:text-slate-300 flex items-center group-hover:text-charcoal-800 dark:group-hover:text-slate-200 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-sage-500 dark:bg-gold-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
