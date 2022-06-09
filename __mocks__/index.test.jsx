import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../pages/index";

test("renders a message", () => {
  const { container, getByText } = render(<Index />);
  expect(getByText("Exotic Snaxx")).toBeInTheDocument();
});
