import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import FavoritesList from "./favorites-list";
import {mockOffers, noon} from "../../test-data/test-data";

const favoriteOffers = [
  {
    cityName: `CityName1`,
    offers: mockOffers
  },
  {
    cityName: `CityName2`,
    offers: mockOffers
  },
];

it(`FavoritesList is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoritesList
        favoriteOffers={favoriteOffers}
        onCityGroupClick={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
