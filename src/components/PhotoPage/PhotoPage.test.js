import React from "react";
import { render } from "@testing-library/react";
import PhotoPage from "./PhotoPage";

describe("PhotoPage tests", () => {
  it("should render", () => {
    expect(render(<PhotoPage />)).toBeTruthy();
  });
});
