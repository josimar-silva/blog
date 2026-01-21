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
    position: "Staff Software Engineer",
    location: "Berlin, Germany",
    period: "January 2023 - April 2026",
    type: "Full-time",
    description:
      "Architectural guild member, guiding teams in architectural decisions and driving technical alignment across the Engineering Chapter. Leading cross-chapter initiatives and projects, establishing technical standards and best practices organization-wide.",
    achievements: [
      "Reduced security fix deployment time by 10% by standardizing base images for JVM-based systems and automating security updates with RenovateBot and nightly container image rebuilds",
      "Automated and consolidated DORA-inspired engineering maturity metrics (Security Issues, Code Quality, Time to Response, Defect Ratio) to identify and address team pain points systematically",
      "Mentored 4 junior/mid-level engineers, with 2 achieving salary raises within 6 months through focused 1:1s, knowledge-sharing sessions, and actionable feedback",
      "Led PolicyCenter v9 to v10 migration managing a team of 3 engineers with zero delays, reducing maintenance costs by 10% while improving developer experience—earning CTO recognition for execution excellence",
      "Actively contributed to hiring process, reviewing code challenges and conducting technical interviews for Software Engineer candidates",
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Gosu",
      "Spring Boot",
      "Micronaut",
      "Kubernetes",
      "Helm",
      "AWS",
      "GitLab CI/CD",
      "RenovateBot",
      "Terraform",
    ],
  },
  {
    company: "FRIDAY Insurance",
    website: "https://friday.de",
    position: "Software Engineer",
    location: "Berlin, Germany",
    period: "March 2020 - December 2022",
    type: "Full-time",
    description:
      "Backend-focused software engineer working on policy management, implementing public and internal APIs, and process automation, with ownership of features and solutions from implementation to production.",
    achievements: [
      "Delivered FRIDAY's first French insurance product with high-availability, high-performance APIs, enabling market expansion with technical excellence and business value",
      "Implemented BiPRO standard integration to exchange documents with third parties for German insurance products, streamlining partner communication",
      "Led workshops on Kubernetes and Helm fundamentals for new joiners, fostering knowledge-sharing and accelerating team onboarding",
      "Published open-source SonarQube plugin for Gosu language, contributing tooling to the Gosu open-source community",
      "Developed and owned features end-to-end in policy management domain, implementing public and internal APIs focused on process automation",
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Gosu",
      "Spring Boot",
      "Micronaut",
      "AWS",
      "Kubernetes",
      "Helm",
      "GitLab CI/CD",
      "PostgreSQL",
      "DynamoDB",
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
      "Working in an Agile-driven process environment with many different microservices and products integrated using an event-driven architecture. Developing customizations and new features on Guidewire's products, building microservices and automation tools to improve internal processes, and implementing features for the company's customer service chatbot project.",
    achievements: [
      "Led a 2-person team developing a chatbot project to reduce customer inquiry response time on social media channels (Facebook, WhatsApp), improving customer experience",
      "Improved billing platform stability by systematically tackling long-standing technical debt, reducing production incidents",
      "Developed customizations and new features for Guidewire products (PolicyCenter, ClaimCenter, BillingCenter) in Agile environment",
      "Implemented features and managed customer service chatbot infrastructure using Dialogflow",
    ],
    technologies: [
      "Ruby",
      "Gosu",
      "Node.js",
      "RabbitMQ",
      "Dialogflow (API.AI)",
      "Guidewire Platform",
      "Microservices",
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
      "Maintenance and development of Federal Road Police's software. Worked with various frameworks from the Java ecosystem, including applets, JSF, Struts 1, and EJB 2.1.",
    achievements: [
      "Refactored legacy applet for radar image analysis for Federal Road Police, reducing maintenance overhead and improving performance",
    ],
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
      "Developed and maintained features on the AVANT teaching platform, migrating legacy architecture to JSR 286 specification for Liferay Portal integration.",
    achievements: [
      "Provided technical assistance to a junior team in another branch office, supporting knowledge transfer and team development",
    ],
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
      description: "Diving into statistics.",
      location: "Sao Paulo-SP, Brazil",
      period: "July 2018 - July 2019",
    },
    {
      institution: "INESC-CNEC",
      degree: "Bachelor's Degree in Computer Information Systems",
      description: "Where I fell in love with Software Engineering.",
      location: "Unaí-MG, Brazil",
      period: "August 2010 - July 2014",
    },
  ],
  certifications: [
    {
      name: "FJ-91, Architecture & Design of Java Projects",
      issuer: "Caelum",
      date: "2019",
      link: "https://sistema.caelum.com.br/alumni/certificate?alunoCursoAlumni.token=am9zaW1hci50aUBob3RtYWlsLmNvbQ==&alunoCursoAlumni.course=FJ-91&alunoCursoAlumni.startDate=27/05/2019",
    },
    {
      name: "LE-1, Linux Essentials",
      issuer: "Linux Professional Institute",
      date: "2019",
      link: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000371076/kuynujynfl",
    },
    {
      name: "Oracle Certified Professional, Java SE 6 Programmer",
      issuer: "Oracle",
      date: "2015",
      link: "https://www.credly.com/badges/16d845eb-9516-4da5-a913-ef924804cb03/linked_in_profile",
    },
  ],
};

const skills: Skills[] = [
  {
    id: "tech-skills",
    title: "Programming Languages, Frameworks & Data",
    skills: [
      { id: "java", name: "Java", level: 90, years: "10 years" },
      { id: "kotlin", name: "Kotlin", level: 75, years: "5 years" },
      { id: "python", name: "Python", level: 30, years: "2 years" },
      { id: "javascript", name: "JavaScript", level: 80, years: "4 years" },
      { id: "spring-boot", name: "Spring Boot", level: 85, years: "5 years" },
      { id: "micronaut", name: "Micronaut", level: 70, years: "5 years" },
      { id: "quarkus", name: "Quarkus", level: 25, years: "1 years" },
      { id: "nodejs", name: "NodeJS", level: 70, years: "3 years" },
      { id: "sql", name: "SQL", level: 80, years: "5 years" },
      { id: "redis", name: "Redis", level: 30, years: "2 years" },
      { id: "dynamodb", name: "DynamoDB", level: 70, years: "4 years" },
      { id: "postgresql", name: "PostgreSQL", level: 80, years: "5 years" },
    ],
  },
  {
    id: "infra-skills",
    title: "Cloud & DevOps",
    skills: [
      { id: "aws", name: "AWS", level: 75, years: "4 years" },
      { id: "docker", name: "Docker", level: 80, years: "7 years" },
      { id: "kubernetes", name: "Kubernetes", level: 80, years: "5 years" },
      { id: "helm", name: "Helm", level: 70, years: "4 years" },
      { id: "terraform", name: "Terraform", level: 55, years: "3 years" },
      { id: "git", name: "Git", level: 85, years: "8 years" },
      { id: "prometheus", name: "Prometheus", level: 65, years: "4 years" },
      { id: "grafana", name: "Grafana", level: 60, years: "4 years" },
      {
        id: "github-actions",
        name: "Github Actions",
        level: 60,
        years: "3 years",
      },
      { id: "gitlab", name: "Gitlab", level: 75, years: "4 years" },
    ],
  },
  {
    id: "strategic-skills",
    title: "Software Engineering & Practices",
    skills: [
      {
        id: "software-development",
        name: "Software Development",
        level: 90,
        years: "10+ years",
      },
      {
        id: "tech-leadership",
        name: "Technical Leadership",
        level: 75,
        years: "3 years",
      },
      { id: "api-design", name: "API Design", level: 85, years: "5 years" },
      { id: "e2e-testing", name: "E2E Testing", level: 75, years: "4 years" },
      {
        id: "performance-testing",
        name: "Performance Testing",
        level: 75,
        years: "5 years",
      },
      {
        id: "peer-mentorship",
        name: "Peer Mentorship",
        level: 65,
        years: "4 years",
      },
    ],
  },
];

const now = {
  lastUpdated: "January 2026",
  work: [
    "As FRIDAY is seizing operations in April, I'm looking forward to my next oportunity.",
  ],
  learning: [
    "Refreshing Data Structures and Algorithms as part of my Kaizen Journal project.",
    "Exploring Rust and Golang for specific use cases on my homelab and side projects.",
    "Experimenting with AI-assisted development tools (Claude Code, Gemini CLI, Coderabbit, Amp Code) while maintaining coding fundamentals and avoiding over-reliance.",
  ],
  projects: [
    "Maintaining my Kubernetes homelab built with Talos OS, implementing GitOps with FluxCD for automated deployments.",
    "Working on Kaizen, a journal of Algorithm and System Design solutions built with Rust and Next.js.",
  ],
  reading: [
    "Actively following the latest developments in Kubernetes, cloud-native technologies, and the evolving JVM ecosystem through various newsletters and technical blogs.",
  ],
  life: [
    "Improving my German proficiency to apply for German citizenship.",
    "Maintaining work-life balance by setting boundaries around work hours and being intentional about how I spend my free time.",
  ],
  goals: [
    "Read 12 books in 2026",
    "Publish 6 technical articles on my blog in 2026",
    "Reach B2 level in German by the end of 2026",
  ],
};

const projects: Project[] = [
  {
    id: 1,
    title: "Homelab",
    description:
      "My Kubernetes homelab. A place for experimentation, fun and never-ending YAML files.",
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
      "Persistent storage with Longhorn and backups to a NAS.",
      "Secret management with 1Password and the 1Password Connect Operator.",
    ],
  },
  {
    id: 2,
    title: "Kaizen",
    description:
      "A solution a day keeps the rust away. My journal of Algorithm and System Design solutions.",
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
