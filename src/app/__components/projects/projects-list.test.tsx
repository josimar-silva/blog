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

import { render, screen } from "@testing-library/react";

import { ProjectsList } from "./projects-list";

const mockProjects = [
  {
    id: 1,
    title: "Project One",
    description: "This is the first project.",
    technologies: ["React", "TypeScript"],
    status: "Live",
    year: "2023",
    links: {
      live: "https://project-one.com",
      github: "https://github.com/user/project-one",
    },
    highlights: ["Highlight 1", "Highlight 2"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project.",
    technologies: ["Node.js", "Express"],
    status: "In Development",
    year: "2024",
    links: {
      github: "https://github.com/user/project-two",
      npm: "https://npmjs.com/package/project-two",
    },
    highlights: ["Highlight A", "Highlight B"],
  },
];

describe("ProjectsList", () => {
  it("renders a list of projects", () => {
    render(<ProjectsList projects={mockProjects} />);

    expect(screen.getByText("Project One")).toBeInTheDocument();
    expect(screen.getByText("Project Two")).toBeInTheDocument();
  });

  it("renders project details correctly", () => {
    render(<ProjectsList projects={mockProjects} />);

    // Check details for Project One
    expect(screen.getByText("This is the first project.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("Highlight 1")).toBeInTheDocument();
  });

  it("renders the correct links for each project", () => {
    render(<ProjectsList projects={mockProjects} />);

    const liveLink = screen.getByRole("link", { name: /Live Demo/i });
    expect(liveLink).toBeInTheDocument();
    expect(liveLink).toHaveAttribute("href", "https://project-one.com");

    const codeLinks = screen.getAllByRole("link", { name: /Code/i });
    expect(codeLinks[0]).toHaveAttribute(
      "href",
      "https://github.com/user/project-one",
    );
    expect(codeLinks[1]).toHaveAttribute(
      "href",
      "https://github.com/user/project-two",
    );

    const npmLink = screen.getByRole("link", { name: /NPM/i });
    expect(npmLink).toBeInTheDocument();
    expect(npmLink).toHaveAttribute(
      "href",
      "https://npmjs.com/package/project-two",
    );
  });

  it("renders the 'Get In Touch' button", () => {
    render(<ProjectsList projects={[]} />);
    const contactLink = screen.getByRole("link", { name: /Get In Touch/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
