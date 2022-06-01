import theme from "../../styles/theme";
import { render, screen } from "../../tests/test-utils";
import Text from "./Text";

describe("< Text />", () => {
  it("should render property", () => {
    render(<Text>Text</Text>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("should have different color if color prop is provided", () => {
    render(<Text color="darkAccent">Text</Text>);
    expect(screen.getByText("Text")).toHaveStyle({
      color: theme.color.darkAccent,
    });
  });
  it("should have different font size if fontSize prop is provided", () => {
    render(<Text fontSize="xl">Text</Text>);
    expect(screen.getByText("Text")).toHaveStyle({
      fontSize: theme.fontSize.xl,
    });
  });
});
