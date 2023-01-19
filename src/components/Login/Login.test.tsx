import { screen, render } from "@testing-library/react";
import "../../hooks/useUser/useUser";
import Login from "./Login";

jest.mock("../../hooks/useUser/useUser", () => {
  const loginUser = jest.fn();
  return () => ({ loginUser });
});

describe("Given Login component", () => {
  describe("When it us rendered", () => {
    test("Then its should show input with text: 'Username', a button with text 'Login'and  link with text: 'Don't have an account? Sign Up'", () => {
      const nameInput = "Username";
      const nameButton = "Login";
      const nameLink = "Don't have an account? Sign Up";

      render(<Login />);

      const renderNameInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const renderPasswordInput = screen.getByRole("button", {
        name: nameButton,
      });
      const renderLink = screen.getByRole("link", {
        name: nameLink,
      });

      expect(renderNameInput).toBeInTheDocument();
      expect(renderPasswordInput).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });
  });
});
