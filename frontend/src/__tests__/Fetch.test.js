import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("checking if fetch api methods works properly", () => {
  const component = render(<App />);
  const getElement = component.getByTestId("city_name");
  expect(getElement.textContent).toBe("London");
});
