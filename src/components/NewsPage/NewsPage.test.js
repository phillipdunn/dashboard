import React from "react";
import { render } from "@testing-library/react";
import NewsPage from "./NewsPage";

describe("NewsPage tests", () => {
  it("should render", () => {
    expect(render(<NewsPage />)).toBeTruthy();
  });
});
