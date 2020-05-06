import React from "react";
import App from "./App";

import ShallowRenderer from "react-test-renderer/shallow";

describe("/App", () => {
  const shallowRender = () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    return renderer.getRenderOutput();
  };

  it("renders without crashing", () => {
    const rendered = shallowRender();
    expect(rendered).toBeDefined();
  });
});
