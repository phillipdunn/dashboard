import React from "react";
import { render } from "@testing-library/react";
import Photos from "./Photos";

describe("Photos tests", () => {
  it("should render", () => {
    expect(render(<Photos />)).toBeTruthy();
  });
});
