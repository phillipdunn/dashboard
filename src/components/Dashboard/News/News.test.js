import React from "react";
import { render } from "@testing-library/react";
import News from "./News";

describe("News tests", () => {
  it("should render", () => {
    expect(render(<News />)).toBeTruthy();
  });
});
