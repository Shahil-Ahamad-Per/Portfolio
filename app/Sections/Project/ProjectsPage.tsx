import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Clock } from "lucide-react";
import { projects } from "./Projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-cream-100/50 px-4 py-16 dark:bg-slate-800/50 sm:px-6 sm:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-charcoal-800 transition-colors duration-300 hover:text-sage-600 dark:text-slate-100 dark:hover:text-gold-400 sm:mb-16 sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isComingSoon =
              project.status === "Coming Soon" ||
              project.status === "Work In Progress";

            return (
              <Card
                key={index}
                className={`group flex flex-col justify-between border-sage-200 bg-cream-50 transition-all duration-500 hover:scale-[1.02] hover:border-sage-400 hover:shadow-2xl dark:border-slate-600 dark:bg-slate-800 dark:hover:border-gold-500 sm:hover:-translate-y-2 sm:hover:scale-105 ${
                  isComingSoon ? "opacity-90" : ""
                }`}
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <CardTitle className="font-serif text-lg leading-snug text-charcoal-800 transition-colors duration-300 group-hover:text-sage-600 dark:text-slate-100 dark:group-hover:text-gold-400 sm:text-xl">
                      {project.title}
                    </CardTitle>
                    {isComingSoon && (
                      <Badge className="pointer-events-none flex shrink-0 items-center gap-1 whitespace-nowrap border-amber-300 bg-amber-100 text-[11px] text-amber-700 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                        <Clock className="h-3 w-3" />
                        {project.status === "Work In Progress"
                          ? "In Dev"
                          : "Soon"}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-xs text-charcoal-600 transition-colors duration-300 group-hover:text-charcoal-700 dark:text-slate-300 dark:group-hover:text-slate-200 sm:text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-sage-100 text-[11px] text-sage-700 transition-colors hover:bg-sage-200 dark:bg-slate-700 dark:text-gold-300 dark:hover:bg-slate-600 sm:text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5 border-t border-sage-100 pt-2 dark:border-slate-700/50 sm:gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                        disabled={isComingSoon}
                        className={`h-9 border-sage-600 bg-transparent px-3 text-xs text-sage-600 transition-all duration-300 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 sm:text-sm ${
                          !isComingSoon
                            ? "shadow-sm hover:scale-105 active:scale-95"
                            : "cursor-not-allowed opacity-50"
                        }`}
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.live, "_blank")}
                        disabled={project.status === "Coming Soon"}
                        className={`h-9 border-sage-600 bg-transparent px-3 text-xs text-sage-600 transition-all duration-300 hover:bg-sage-50 dark:border-gold-400 dark:text-gold-400 dark:hover:bg-slate-800 sm:text-sm ${
                          project.status !== "Coming Soon"
                            ? "shadow-sm hover:scale-105 active:scale-95"
                            : "cursor-not-allowed opacity-50"
                        }`}
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </Button>
                    )}
                    {isComingSoon && !project.github && !project.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        disabled
                        className="h-9 cursor-not-allowed border-sage-400 bg-transparent px-3 text-xs text-sage-600 opacity-60 dark:border-gold-600 dark:text-gold-400 sm:text-sm"
                      >
                        <Clock className="mr-1.5 h-3.5 w-3.5" />
                        In Development
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
