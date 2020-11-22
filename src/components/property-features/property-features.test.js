import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import PropertyFeatures from "./property-features";

it(`PropertyFeatures is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PropertyFeatures
        type={`type`}
        bedrooms={1}
        adults={2}
      />
  );
  expect(tree).toMatchSnapshot();
});
