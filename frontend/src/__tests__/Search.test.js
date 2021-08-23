import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("changing the value of the input works correctly", () => {
  const component = render(<App />);
  const searchElement = component.getByTestId("input");

  fireEvent.change(searchElement, {
    target: {
      value: "London",
    },
  });
  expect(searchElement.value).toBe("London");
});
