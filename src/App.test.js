import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders App without crashing", () => {
//   const { getByText } = render(<App />);
//   const header = getByText(//i);
//   expect(header).toBeInTheDocument();
//   expect(header).toBeTruthy();
//   expect(header).not.toBeFalsy();
// });
test('concise test - renders contact form header', () => {
  const {getByText } = render(<App />);
  getByText(/First Name/i);
});
