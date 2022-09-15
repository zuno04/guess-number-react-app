import { render } from "@testing-library/react";
import Config from "../components/Config";

test("Config renders correctly", () => {
  const { container } = render(<Config />);
  expect(container).toBeDefined();
});
