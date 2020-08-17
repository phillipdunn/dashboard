import React from "react";
import { render } from "@testing-library/react";
import ButtonTwo from "./ButtonTwo";

describe("ButtonTwo tests", () => {
  it("should render", () => {
    expect(render(<ButtonTwo />)).toBeTruthy();
  });
});
