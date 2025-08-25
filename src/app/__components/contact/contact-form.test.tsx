import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ContactForm } from "./contact-form.tsx";

describe("ContactForm", () => {
  it("should render the form correctly", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  it("should display success message after submission and allow sending another message", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john.doe@example.com");
    await user.type(screen.getByLabelText(/subject/i), "Test Subject");
    await user.type(
      screen.getByLabelText(/message/i),
      "This is a test message.",
    );

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    // Check for loading state
    expect(screen.getByRole("button", { name: /sending.../i })).toBeDisabled();

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });

    // Check that the form is gone
    expect(screen.queryByRole("form")).not.toBeInTheDocument();

    // Click "Send Another Message"
    const sendAnotherButton = screen.getByRole("button", {
      name: /send another message/i,
    });
    await user.click(sendAnotherButton);

    // Check that the form is back
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });
});
