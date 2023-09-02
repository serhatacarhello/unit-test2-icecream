import { render, screen } from "@testing-library/react";
import App from "./App";

test("render console", () => {
  render(<App />);
  console.log("render App");
});
