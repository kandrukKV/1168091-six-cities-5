import React from "react";
import renderer from "react-test-renderer";
import OffersContentEmpty from "./offers-content-empty";

it(`OffersContentEmpty rendered correctly`, () => {
  const tree = renderer.create(
      <OffersContentEmpty
        currentCity={`City1`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
