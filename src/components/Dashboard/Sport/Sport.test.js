import React from "react";
import { render } from "@testing-library/react";
import Sport from "./Sport";

describe("Sport tests", () => {
  it("should render", () => {
    expect(render(<Sport />)).toBeTruthy();
  });
});
