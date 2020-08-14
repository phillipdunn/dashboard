import React from "react";
import { render } from "@testing-library/react";
import FileInputBox from "./FileInputBox";

describe("FileInputBox tests", () => {
  it("should render", () => {
    expect(render(<FileInputBox />)).toBeTruthy();
  });
});
