import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Package } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: string
  year: string
  links: {
    live?: string
    github?: string
    npm?: string
  }
  highlights: string[]
}

interface ProjectsListProps {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{project.year}</span>
                        <span>•</span>
                        <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {project.links.live && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.links.npm && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.links.npm} target="_blank" rel="noopener noreferrer">
                            <Package className="mr-2 h-4 w-4" />
                            NPM
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div>
                    <h3 className="font-semibold mb-3">Key Features & Achievements:</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              {index < projects.length - 1 && <div className="border-b border-border/50" />}
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in working together or have questions about any of these projects?
          </p>
          <Button asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
