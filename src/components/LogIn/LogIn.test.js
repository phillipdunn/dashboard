import React from "react";
import { render } from "@testing-library/react";
import LogIn from "./LogIn";

describe("LogIn tests", () => {
  it("should render", () => {
    expect(render(<LogIn />)).toBeTruthy();
  });
});
