import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import PlacesInfo from "./places-info";
import {mockOffers} from "../../test-data/test-data";

it(`PlacesInfo is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PlacesInfo
        cards={mockOffers}
        cityName={`CityName`}
      />
  );
  expect(tree).toMatchSnapshot();
});
