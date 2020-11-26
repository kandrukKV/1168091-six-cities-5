import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {mockReviews} from "../../test-data/test-data";

it(`Review render correctly`, () => {
  const tree = renderer.create(
      <Review
        review={mockReviews[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
