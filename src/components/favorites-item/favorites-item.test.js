import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import FavoritesItem from "./favorites-item";
import {mockOffers} from "../../test-data/test-data";

const favoritesItem = {
  cityName: `City1`,
  offers: mockOffers
};

it(`FavoritesItem is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <FavoritesItem
        favoritesItem={favoritesItem}
      />
  );
  expect(tree).toMatchSnapshot();
});
