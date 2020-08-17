import React from "react";
import { render } from "@testing-library/react";
import ThumbNail from "./ThumbNail";

describe("ThumbNail tests", () => {
  it("should render", () => {
    expect(render(<ThumbNail />)).toBeTruthy();
  });
});
