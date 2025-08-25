import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AboutHero } from "./about-hero.tsx";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="test" {...props} />;
  },
}));

describe("AboutHero", () => {
  it("should render the hero section with correct content", () => {
    render(<AboutHero />);

    // Check for heading and subtitle
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/full-stack developer with a passion/i),
    ).toBeInTheDocument();

    // Check for details
    expect(screen.getByText(/san francisco, ca/i)).toBeInTheDocument();
    expect(screen.getByText(/5\+ years experience/i)).toBeInTheDocument();

    // Check for buttons
    expect(
      screen.getByRole("button", { name: /download resume/i }),
    ).toBeInTheDocument();
    const contactLink = screen.getByRole("link", { name: /get in touch/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
