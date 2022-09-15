import { render } from "@testing-library/react";
import Party from "../components/Party";

test("Party renders correctly", () => {
  const { container } = render(<Party />);
  expect(container).toBeDefined();
});
