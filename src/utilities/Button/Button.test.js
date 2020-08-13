import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button tests", () => {
  it("should render", () => {
    expect(render(<Button />)).toBeTruthy();
  });
});
