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

import { Education, Experience, Skills } from "@/interfaces/me";
import { Project } from "@/interfaces/project";

const experience: Experience[] = [
  {
    company: "FRIDAY Insurance",
    website: "https://friday.de",
    position: "Software Engineer & Staff Software Engineer",
    location: "Berlin, Germany",
    period: "March 2020 - Present",
    type: "Full-time",
    description:
      "As a Staff Software Engineer since 2023, I am part of the architectural guild, focusing on guiding teams in their architectural decisions and ensuring technical alignment across the Engineering Chapter. \nAdditionally, I lead cross-chapter projects and initiatives. I mentor less experienced Engineers, fostering their growth with knowledge-sharing sessions, 1:1s, and feedback sessions. As a Software Engineer with a focus on the backend, I worked on policy management, implementing public and internal APIs, and process automation, with ownership of features and solutions from implementation to production. Using JVM-based languages such as Kotlin, Gosu, and Java with Micronaut, and SpringBoot frameworks on a cloud-native tech stack powered by AWS, Kubernetes, Helm, and Gitlab CI/CD.",
    achievements: [
      "Launched the first company insurance product for the French market with high technical standards and business value.",
      "Implementation of integration to exchange documents of German insurance products with third parties through the BIPRO standard.",
      "Publishing a Sonar plugin for the Gosu language as open-source software.",
    ],
    technologies: [
      "Kotlin",
      "Gosu",
      "Java",
      "Python",
      "Micronaut",
      "Spring Boot",
      "AWS",
      "Kubernetes",
      "Helm",
      "Gitlab CI/CD",
    ],
  },
  {
    company: "Youse Insurances",
    website: "https://www.youse.com.br",
    position: "Software Engineer",
    location: "São Paulo, Brazil",
    period: "June 2017 - February 2020",
    type: "Full-time",
    description:
      "Working in an Agile-driven process environment with many different microservices and products that are integrated using an event-driven architecture. Developing customizations and new features on Guidewire's products used at the company. Developing microservices and tools to help improve the company's internal processes. Implementing new features, ML training, and managing the company's customer service chatbot project.",
    achievements: [
      "Launched the first company insurance product for the French market with high technical standards and business value.",
      "Implementation of integration to exchange documents of German insurance products with third parties through the BIPRO standard.",
      "Published a Sonar plugin for the Gosu language as open-source software.",
    ],
    technologies: [
      "Gosu",
      "Ruby",
      "Typescript",
      "RabbitMQ",
      "NodeJS",
      "Dialogflow (ApiAl)",
      "Ruby on Rails",
    ],
  },
  {
    company: "Abaco Consultores",
    website: "https://abacobr.consulting",
    position: "Guidewire Consultant",
    location: "Brasília, Brazil",
    period: "September 2016 - May 2017",
    type: "Full-time",
    description:
      "Developing customizations and new features on Guidewire's products (ClaimCenter, ContactCenter, BillingCenter, and PolicyCenter) at Youse Seguros.",
    technologies: ["Gosu", "Tomcat", "MSSQL"],
  },
  {
    company: "ITSS Soluções em Tecnologia",
    website: "https://itsstecnologia.com.br",
    position: "Java Consultant",
    location: "Brasília, Brazil",
    period: "August 2015 - August 2016",
    type: "Full-time",
    description:
      "Development of integration middlewares and new applications to integrate with SAP ERP. Configuration and management of the application's test/homologation and production environments.",
    technologies: ["Java", "Struts 2", "EJB 3", "Weblogic"],
  },
  {
    company: "3Way Networks",
    website: "https://www.3way.com.br/",
    position: "Java Developer",
    location: "Brasília, Brazil",
    period: "February 2015 - July 2015",
    type: "Full-time",
    description:
      "Maintenance of Federal Road Police's software. All the features were implemented on different frameworks from the Java ecosystem, such as applets, JSF, Struts 1, EJB 2.1, etc.",
    technologies: ["Java", "JSF", "Struts 1", "EJB 2.1", "JBoss"],
  },
  {
    company: "Grupo NT",
    website: "https://www.grupont.com.br",
    position: "Junior Java Developer",
    location: "Brasília, Brazil",
    period: "March 2014 - February 2015",
    type: "Full-time",
    description:
      "Development and maintenance features on AVANT teaching platform. Transposition platform of ancient architecture features for JSR 286, to Liferay Portal. Implementation of new features on the platform. Technical assistance to a junior team in another branch office.",
    technologies: ["Java", "Struts 2", "JBoss", "PostgreSQL"],
  },
  {
    company: "CapuL",
    website: "https://capul.coop.br",
    position: "Software Developer",
    location: "Unaí, Brazil",
    period: "June 2012 - February 2014",
    type: "Full-time",
    description:
      "Analysis and development of customizations in the ERP Protheus by ADVPL language.",
    achievements: [
      "Pioneered the adoption of Redmine and SVN, enhancing version control and project tracking for ADVPL customizations.",
    ],
    technologies: ["ADVPL", "SVN"],
  },
];

const education: Education = {
  degrees: [
    {
      institution: "Uninove",
      degree: "Postgraduate Degree in Applied Statistics",
      description: "Diving into statistics",
      location: "Sao Paulo-SP, Brazil",
      period: "July 2018 - July 2019",
    },
    {
      institution: "INESC-CNEC",
      degree: "Bachelor's Degree in Computer Information Systems",
      description: "Diving into statistics",
      location: "Unaí-MG, Brazil",
      period: "August 2010 - July 2014",
    },
  ],
  certifications: [
    {
      name: "FJ-91, Architecture & Design of Java Projects",
      issuer: "Caelum",
      date: "2019",
    },
    {
      name: "LE-1, Linux Essentials",
      issuer: "Linux Professional Institute",
      date: "2019",
    },
    {
      name: "Oracle Certified Professional, Java SE 6 Programmer",
      issuer: "Oracle",
      date: "2015",
    },
  ],
};

const skills: Skills[] = [
  {
    title: "Programming Languages, Frameworks & Data",
    skills: [
      { name: "Java", level: 90, years: "10 years" },
      { name: "Kotlin", level: 75, years: "5 years" },
      { name: "Python", level: 30, years: "2 years" },
      { name: "JavaScript", level: 80, years: "4 years" },
      { name: "Spring Boot", level: 85, years: "5 years" },
      { name: "Micronaut", level: 70, years: "5 years" },
      { name: "Quarkus", level: 25, years: "1 years" },
      { name: "NodeJS", level: 70, years: "3 years" },
      { name: "SQL", level: 80, years: "5 years" },
      { name: "Redis", level: 30, years: "2 years" },
      { name: "DynamoDB", level: 70, years: "4 years" },
      { name: "PostgreSQL", level: 80, years: "5 years" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 75, years: "4 years" },
      { name: "Docker", level: 80, years: "7 years" },
      { name: "Kubernetes", level: 80, years: "5 years" },
      { name: "Helm", level: 70, years: "4 years" },
      { name: "Terraform", level: 55, years: "3 years" },
      { name: "Git", level: 85, years: "8 years" },
      { name: "Prometheus", level: 65, years: "4 years" },
      { name: "Grafana", level: 60, years: "4 years" },
      { name: "Github Actions", level: 60, years: "3 years" },
      { name: "Gitlab", level: 75, years: "4 years" },
    ],
  },
  {
    title: "Software Engineering & Practices",
    skills: [
      { name: "Software Development", level: 90, years: "10+ years" },
      { name: "Project Leadership", level: 75, years: "3 years" },
      { name: "API Design", level: 85, years: "5 years" },
      { name: "E2E Testing", level: 75, years: "4 years" },
      { name: "Performance Testing", level: 75, years: "5 years" },
      { name: "Peer Mentorship", level: 65, years: "4 years" },
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
    'Currently reading "Designing Data-Intensive Applications" by Martin Kleppmann for the second time - it\'s one of those books that reveals new insights on each read.',
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

const projects: Project[] = [
  {
    id: 1,
    title: "Homelab",
    description:
      "My Kubernetes cluster homelab. A place for experimentation, fun and never-ending YAML files.",
    technologies: ["Kubernetes", "Helm", "Flux CD", "Talos OS"],
    status: "Live",
    year: "2025",
    links: {
      live: "https://hello.from-gondor.com",
      github: "https://github.com/josimar-silva/homelab",
    },
    highlights: [
      "Managed by GitOps principles with FluxCD, Renovate, and GitHub Actions.",
      "Kubernetes cluster built on top of Talos OS.",
      "Network segmentation with VLANs and OPNsense firewall.",
      "Persistent storage with Longhorn and backups to a QNAP NAS.",
      "Secret management with 1Password and the 1Password Connect Operator.",
    ],
  },
  {
    id: 2,
    title: "Kaizen",
    description:
      "A solution a day keeps the rust away. My journal of Algorithm and System Design analysis.",
    technologies: ["Rust", "Next.js", "TypeScript", "Github Actions"],
    status: "Live",
    year: "2024",
    links: {
      live: "https://kaizen.josimar-silva.com",
      github: "https://github.com/josimar-silva/kaizen",
    },
    highlights: [
      "A Rust-based CLI tool (`kaizen-parser`) automatically parses structured commit messages.",
      "A Next.js frontend application (`website`) consumes this generated data to present a clean, minimalist interface.",
      "Features a GitHub-style calendar heatmap and a chronological timeline of progress.",
    ],
  },
  {
    id: 3,
    title: "Sonar Gosu Plugin",
    description:
      "Gosu Programming Language Plugin for SonarQube. The first OpenSource Sonarqube Gosu Plugin using ANTLR (Another Tool For Language Recognition) to execute static analysis of Gosu code.",
    technologies: ["SonarQube", "Gosu", "ANTLR4", "Gradle", "Java"],
    status: "Archived",
    year: "2023",
    links: {
      github: "https://github.com/FRI-DAY/sonar-gosu-plugin",
    },
    highlights: [
      "Uses ANTLR4 for static analysis of Gosu code.",
      "Provides a plugin for SonarQube.",
      "Available in the SonarQube Marketplace.",
      "Supports SonarQube v8.9 and v9+.",
    ],
  },
];

const me = {
  education: education,
  experience: experience,
  skills: skills,
  now: now,
  projects: projects,
};

export default me;
