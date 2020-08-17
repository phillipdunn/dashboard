import React from "react";
import { render } from "@testing-library/react";
import Clothes from "./Clothes";

describe("Clothes tests", () => {
  it("should render", () => {
    expect(render(<Clothes />)).toBeTruthy();
  });
});
