import React from "react";
import { render } from "@testing-library/react";
import TaskPage from "./TaskPage";

describe("TaskPage tests", () => {
  it("should render", () => {
    expect(render(<TaskPage />)).toBeTruthy();
  });
});
