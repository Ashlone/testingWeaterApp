/*import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Today from "../components/today/Today";

test("checking if it renders today component", () => {
  let today = new Date().toLocaleDateString();

  const component = render(<Today today_date={today} />);
  const todayElement = component.getByTestId("date");
  expect(todayElement.textContent).toBe("2021/08/21"); //This date has to be changed based on the current date for the test to pass
});*/

import React from "react";
import renderer from "react-test-renderer";
import Today from "../components/today/Today";

it("renders correctly", () => {
  let today = new Date().toLocaleDateString();
  const tree = renderer.create(<Today today_date={today} />).toJSON;
  expect(tree).toMatchSnapshot();
});
