import React from "react";
import { render } from "@testing-library/react";
import TaskItem from "./TaskItem";

describe("TaskItem tests", () => {
  it("should render", () => {
    expect(render(<TaskItem />)).toBeTruthy();
  });
});
