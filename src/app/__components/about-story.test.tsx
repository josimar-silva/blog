import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AboutStory } from "./about-story.tsx";

describe("AboutStory", () => {
  it("should render the story section with correct content", () => {
    render(<AboutStory />);

    // Check for heading
    expect(
      screen.getByRole("heading", { name: /my story/i }),
    ).toBeInTheDocument();

    // Check for some text content
    expect(
      screen.getByText(/from curious beginner to passionate developer/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/my journey into web development started/i),
    ).toBeInTheDocument();
  });
});
