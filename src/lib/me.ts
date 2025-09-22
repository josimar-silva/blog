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

const experience = [
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
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
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
];

const education = {
  
};


const skills = [
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

const now = {
  lastUpdated: "January 2025",
  work: [
    "I'm currently working as a Senior Full-Stack Developer at TechCorp, leading a team of 4 developers on a major product redesign that serves over 100k users. We're rebuilding the entire frontend with React and TypeScript while modernizing our Node.js backend infrastructure.",
    "On the side, I'm exploring opportunities in the AI/ML space and considering a transition into developer relations or technical writing roles.",
  ],
  learning: [
    "I'm diving deep into Rust after participating in the Rinha de Backend challenge. The language's performance characteristics and memory safety model have me excited about systems programming again.",
    "I'm also experimenting with AI-assisted development using tools like GitHub Copilot and Gemini CLI, trying to understand how to use these tools effectively without becoming dependent on them.",
  ],
  projects: [
    "Working on a new open-source rate limiting library for Node.js that I hope to release this quarter. It's designed to be more flexible and performant than existing solutions.",
    "I'm also redesigning this website to better showcase my writing and projects, with a focus on performance and accessibility.",
  ],
  reading: [
    "Currently reading \"Designing Data-Intensive Applications\" by Martin Kleppmann for the second time - it's one of those books that reveals new insights on each read.",
    "I'm also following the latest developments in React Server Components and the evolving JavaScript ecosystem through various newsletters and technical blogs.",
  ],
  life: [
    "Living in San Francisco and really enjoying the tech community here. I've been attending more local meetups and conferences, which has been great for networking and learning from other developers.",
    "I've gotten back into cycling and try to ride around the city on weekends. It's a great way to explore different neighborhoods and get some exercise away from the computer.",
    "Trying to maintain a better work-life balance by setting boundaries around work hours and being more intentional about how I spend my free time.",
  ],
  goals: [
    "Publish at least 12 technical blog posts",
    "Release 2 open-source projects",
    "Speak at a technical conference",
    "Learn Rust well enough to build a production application",
    "Cycle 500 miles throughout the year",
  ],
};

const me = {
  education: education,
  experience: experience,
  skills: skills,
  now: now,
};

export default me;
