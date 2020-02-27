import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("App Loads", () => {
  const { getByText } = render(<App />);
  expect(getByText("My Client App")).toBeInTheDocument();
});

it("App loads, and succesfully queries our local endpoint", () => {
  const { getByText } = render(<App />);
  expect(getByText("Chief Technical Officer")).toBeInTheDocument();
});
