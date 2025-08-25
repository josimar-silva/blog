/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/__components/ui/card";
import { Progress } from "@/app/__components/ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95, years: "4 years" },
      { name: "TypeScript", level: 90, years: "3 years" },
      { name: "Next.js", level: 85, years: "2 years" },
      { name: "Tailwind CSS", level: 90, years: "3 years" },
      { name: "JavaScript", level: 95, years: "5 years" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, years: "4 years" },
      { name: "Express.js", level: 80, years: "3 years" },
      { name: "PostgreSQL", level: 75, years: "3 years" },
      { name: "MongoDB", level: 70, years: "2 years" },
      { name: "REST APIs", level: 90, years: "4 years" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, years: "5 years" },
      { name: "Docker", level: 70, years: "2 years" },
      { name: "AWS", level: 65, years: "2 years" },
      { name: "Vercel", level: 85, years: "2 years" },
      { name: "Jest", level: 80, years: "3 years" },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-8 md:py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.years}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
