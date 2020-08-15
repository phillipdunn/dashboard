import React from "react";
import { render } from "@testing-library/react";
import TaskInputBox from "./TaskInputBox";

describe("TaskInputBox tests", () => {
  it("should render", () => {
    expect(render(<TaskInputBox />)).toBeTruthy();
  });
});
