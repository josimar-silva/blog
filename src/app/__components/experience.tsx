import { Card, CardContent, CardHeader, CardTitle } from "@/app/__components/ui/card"
import { Badge } from "@/app/__components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/app/__components/ui/button"
import Link from "next/link"

const experiences = [
  {
    company: "TechCorp Inc.",
    position: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Lead development of customer-facing web applications serving 100k+ users. Architected and implemented microservices using Node.js and React, resulting in 40% improved performance.",
    achievements: [
      "Led a team of 4 developers on a major product redesign",
      "Reduced application load time by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    website: "https://techcorp.com",
  },
  {
    company: "StartupXYZ",
    position: "Full-Stack Developer",
    location: "Remote",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Built the entire web platform from scratch for a fintech startup. Developed both frontend and backend systems, handling everything from user authentication to payment processing.",
    achievements: [
      "Built MVP that secured $2M in Series A funding",
      "Implemented secure payment processing with Stripe",
      "Developed real-time dashboard with WebSocket integration",
      "Achieved 99.9% uptime with proper monitoring and alerts",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe API", "Socket.io"],
    website: "https://startupxyz.com",
  },
  {
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    location: "New York, NY",
    period: "2019 - 2020",
    type: "Full-time",
    description:
      "Developed responsive websites and web applications for various clients including e-commerce platforms, corporate websites, and marketing landing pages.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Improved client website performance by average of 35%",
      "Implemented accessibility standards (WCAG 2.1)",
      "Created reusable component library for team efficiency",
    ],
    technologies: ["JavaScript", "React", "SCSS", "WordPress", "PHP"],
    website: "https://digitalagencypro.com",
  },
]

export function Experience() {
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <span>{exp.company}</span>
                      {exp.website && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={exp.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
