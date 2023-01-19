import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the headding, with level 1 and a title :'Notes", () => {
      render(<Header title={"Notes"} />);

      const expectHeading = screen.getByRole("heading", {
        name: "Notes",
        level: 1,
      });

      expect(expectHeading).toBeInTheDocument();
    });
  });
});
