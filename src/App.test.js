import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test All pages render", () => {
  it("/ test", () => {
    render(<App />);

    expect(screen.getByText("see full list")).toBeInTheDocument();
  });
});
