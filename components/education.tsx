import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    location: "Berkeley, CA",
    period: "2015 - 2019",
    gpa: "3.8/4.0",
    description:
      "Focused on software engineering, algorithms, and data structures. Completed senior capstone project building a full-stack web application for student course planning.",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
      "Web Development",
      "Machine Learning",
    ],
    achievements: ["Dean's List (6 semesters)", "Computer Science Honor Society", "Best Capstone Project Award"],
  },
]

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023-001",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-456",
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    date: "2022",
    credentialId: "GA-CERT-2022-789",
  },
]

export function Education() {
  return (
    <section className="py-8 md:py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Education</h3>
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-primary">{edu.institution}</div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Professional Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                        <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Issued {cert.date}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            ID: {cert.credentialId}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
