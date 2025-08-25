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

import { Footer } from "@/app/__components/common/footer";
import { Header } from "@/app/__components/common/header";
import { ProjectsHero } from "@/app/__components/projects/projects-hero";
import { ProjectsList } from "@/app/__components/projects/projects-list";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. Features include product management, shopping cart, payment processing, and admin dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
      "Prisma",
    ],
    status: "Live",
    year: "2024",
    links: {
      live: "https://ecommerce-demo.com",
      github: "https://github.com/johndoe/ecommerce-platform",
    },
    highlights: [
      "Processed over $100k in transactions",
      "99.9% uptime with automated monitoring",
      "Mobile-first responsive design",
      "Integrated payment processing with Stripe",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "JWT",
    ],
    status: "Live",
    year: "2024",
    links: {
      live: "https://taskmanager-demo.com",
      github: "https://github.com/johndoe/task-manager",
    },
    highlights: [
      "Real-time collaboration with WebSocket",
      "Used by 500+ teams worldwide",
      "Advanced project analytics dashboard",
      "Offline-first architecture",
    ],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Built with modern web technologies.",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Vercel",
    ],
    status: "Live",
    year: "2023",
    links: {
      live: "https://weather-dashboard-demo.com",
      github: "https://github.com/johndoe/weather-dashboard",
    },
    highlights: [
      "Interactive weather maps",
      "7-day detailed forecasts",
      "Location-based recommendations",
      "PWA with offline capabilities",
    ],
  },
  {
    id: 4,
    title: "Blog CMS",
    description:
      "A headless content management system for blogs and publications. Features markdown support, media management, and multi-author capabilities.",
    technologies: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Live",
    year: "2023",
    links: {
      live: "https://blog-cms-demo.com",
      github: "https://github.com/johndoe/blog-cms",
    },
    highlights: [
      "Markdown-based content editing",
      "Multi-author support",
      "SEO optimization built-in",
      "Fast static site generation",
    ],
  },
  {
    id: 5,
    title: "API Rate Limiter",
    description:
      "An open-source rate limiting middleware for Node.js applications. Supports multiple algorithms and storage backends with detailed analytics.",
    technologies: ["Node.js", "Redis", "TypeScript", "Jest", "GitHub Actions"],
    status: "Open Source",
    year: "2023",
    links: {
      github: "https://github.com/johndoe/api-rate-limiter",
      npm: "https://npmjs.com/package/api-rate-limiter",
    },
    highlights: [
      "1000+ weekly downloads on npm",
      "Multiple rate limiting algorithms",
      "Comprehensive test coverage",
      "Production-ready with monitoring",
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "This very website! A modern, responsive portfolio and blog built with Next.js, featuring dark mode, optimized performance, and clean design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    status: "Live",
    year: "2024",
    links: {
      live: "https://johndoe.dev",
      github: "https://github.com/johndoe/portfolio",
    },
    highlights: [
      "100/100 Lighthouse score",
      "Dark/light mode support",
      "MDX-powered blog",
      "Fully responsive design",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsList projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
