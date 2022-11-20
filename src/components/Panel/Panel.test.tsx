import { render, screen } from "../../tests/test-utils";
import { Panel } from "./Panel";

describe("< Text />", () => {
  it("should render correctly", () => {
    render(<Panel title="icon title" icon="icon src"></Panel>);
    expect(screen.getByText("icon title")).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "icon src");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "icon title");
  });
});
