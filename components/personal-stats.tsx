import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Coffee, Award } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: "50+",
    label: "Projects Completed",
    description: "Web applications and tools built",
  },
  {
    icon: Users,
    value: "10k+",
    label: "Blog Readers",
    description: "Monthly active readers",
  },
  {
    icon: Coffee,
    value: "1000+",
    label: "Cups of Coffee",
    description: "Fuel for late-night coding",
  },
  {
    icon: Award,
    value: "15+",
    label: "Open Source",
    description: "Contributions to projects",
  },
]

export function PersonalStats() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
