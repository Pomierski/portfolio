import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

interface Props {
  children?: React.ReactNode;
}

const AllTheProviders = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
