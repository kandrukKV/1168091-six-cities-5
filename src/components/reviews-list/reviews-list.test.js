import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ReviewsList from "./reviews-list";
import {mockReviews} from "../../test-data/test-data";

it(`ReviewsList with data is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <ReviewsList
        reviews={mockReviews}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`ReviewsList with out data is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <ReviewsList
        reviews={[]}
      />
  );
  expect(tree).toMatchSnapshot();
});
