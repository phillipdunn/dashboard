import React from "react";
import { render } from "@testing-library/react";
import TaskItems from "./TaskItems";

describe("TaskItems tests", () => {
  it("should render", () => {
    expect(render(<TaskItems />)).toBeTruthy();
  });
});
