import React from "react";
import Application from "../Application";

import ShallowRenderer from "react-test-renderer/shallow";

describe("src/Application", () => {
  const shallowRender = () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Application />);
    return renderer.getRenderOutput();
  };

  it("renders without crashing", () => {
    const rendered = shallowRender();
    expect(rendered).toBeDefined();
  });
});
