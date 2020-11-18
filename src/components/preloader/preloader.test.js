import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Preloader from "./preloader";

it(`Preloader is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Preloader/>
  );
  expect(tree).toMatchSnapshot();
});
