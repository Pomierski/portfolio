import { theme } from "../../styles/theme";
import { render, screen } from "../../tests/test-utils";
import { Heading } from "./Heading";

describe("<Heading />", () => {
  it("should render correctly", () => {
    render(<Heading>Heading text</Heading>);
    expect(screen.getByText("Heading text")).toBeInTheDocument();
  });

  it("should have different color if color prop is provided", () => {
    const { rerender } = render(<Heading>Heading text</Heading>);
    expect(screen.getByText("Heading text")).toHaveStyle({
      color: theme.color.accent,
    });

    rerender(<Heading color="main">Heading text</Heading>);

    expect(screen.getByText("Heading text")).toHaveStyle({
      color: "#ffffff",
    });
  });
});
