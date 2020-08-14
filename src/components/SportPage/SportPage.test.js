import React from "react";
import { render } from "@testing-library/react";
import SportPage from "./SportPage";

describe("SportPage tests", () => {
  it("should render", () => {
    expect(render(<SportPage />)).toBeTruthy();
  });
});
