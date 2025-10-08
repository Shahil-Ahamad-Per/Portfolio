import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Clock } from "lucide-react"
import { projects } from "./Projects"


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-cream-100/50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-charcoal-800 dark:text-slate-100 mb-16 hover:text-sage-600 dark:hover:text-gold-400 transition-colors duration-300">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isComingSoon = project.status === "Coming Soon"
            
            return (
              <Card
                key={index}
                className={`bg-cream-50 dark:bg-slate-800 border-sage-200 dark:border-slate-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:border-sage-400 dark:hover:border-gold-500 transition-all duration-500 group cursor-pointer ${
                  isComingSoon ? 'opacity-90' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl font-serif text-charcoal-800 dark:text-slate-100 group-hover:text-sage-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {isComingSoon && (
                      <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700 flex items-center gap-1 whitespace-nowrap pointer-events-none">
                        <Clock className="h-3 w-3" />
                        Soon
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-charcoal-600 dark:text-slate-300 group-hover:text-charcoal-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-sage-100 dark:bg-slate-700 text-sage-700 dark:text-gold-300 hover:bg-sage-200 dark:hover:bg-slate-600 hover:scale-110 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        disabled={isComingSoon}
                        className={`border-sage-600 text-sage-600 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 bg-transparent transition-all duration-300 ${
                          !isComingSoon ? 'hover:scale-110 hover:shadow-lg' : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.live, "_blank")}
                        disabled={isComingSoon}
                        className={`border-sage-600 text-sage-600 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 bg-transparent transition-all duration-300 ${
                          !isComingSoon ? 'hover:scale-110 hover:shadow-lg' : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {isComingSoon && !project.github && !project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="border-sage-400 text-sage-600 dark:border-gold-600 dark:text-gold-400 bg-transparent opacity-60 cursor-not-allowed hover:opacity-75 hover:border-sage-500 dark:hover:border-gold-500 transition-all duration-300"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        In Development
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}