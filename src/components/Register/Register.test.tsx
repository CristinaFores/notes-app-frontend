import { screen, render } from "@testing-library/react";
import "../../hooks/useUser/useUser";
import Register from "./Register";

jest.mock("../../hooks/useUser/useUser", () => {
  const loginUser = jest.fn();
  return () => ({ loginUser });
});

describe("Given Login component", () => {
  describe("When it us rendered", () => {
    test("Then its should show input with text: 'Username'and 'Email, a button with text 'Register'and  link with text: 'Do you already have an account? Get in'", () => {
      const nameInput = "Username";
      const emailInut = "Email";
      const nameButton = "Register";
      const nameLink = "Do you already have an account? Get in";

      render(<Register />);

      const renderNameInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const renderEmailInput = screen.getByRole("textbox", {
        name: emailInut,
      });
      const renderPasswordInput = screen.getByRole("button", {
        name: nameButton,
      });
      const renderLink = screen.getByRole("link", {
        name: nameLink,
      });

      expect(renderNameInput).toBeInTheDocument();
      expect(renderEmailInput).toBeInTheDocument();
      expect(renderPasswordInput).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });
  });
});
