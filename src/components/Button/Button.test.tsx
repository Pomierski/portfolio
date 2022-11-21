import { theme } from "../../styles/theme";
import { render, screen } from "../../tests/test-utils";
import { Button } from "./Button";

describe("<Heading />", () => {
  it("renders fill variant correctly", () => {
    render(
      <Button fill={true} href="#">
        Disabled
      </Button>
    );

    expect(screen.getByRole("link")).toHaveStyle({
      backgroundColor: theme.color.accent,
    });
  });
  it("renders disabled variant correctly", () => {
    render(
      <Button disable={true} href="#">
        Disabled
      </Button>
    );

    expect(screen.getByRole("link")).toHaveStyle({
      borderColor: theme.color.secondary,
      color: theme.color.secondary,
    });
  });
  it("renders center variant correctly", () => {
    render(
      <Button center={true} href="#">
        Disabled
      </Button>
    );

    expect(screen.getByRole("link")).toHaveStyle({
      margin: "0 auto",
    });
  });
  it("renders icon", () => {
    render(
      <Button icon={<i></i>} center={true} href="#">
        Disabled
      </Button>
    );

    expect(screen.getByTestId("button-icon")).toBeInTheDocument();
  });
});
