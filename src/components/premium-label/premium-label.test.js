import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import PremiumLabel from "./premium-label";

it(`Preloader is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PremiumLabel
        className={`className`}
      />
  );
  expect(tree).toMatchSnapshot();
});
