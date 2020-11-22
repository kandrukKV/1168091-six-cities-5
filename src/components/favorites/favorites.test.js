import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import Favorites from "./favorites";
import {BrowserRouter as Router} from 'react-router-dom';
import {cities, mockOffers} from "../../test-data/test-data";

const favoriteOffers = [
  {
    cityName: cities[0],
    offers: [
      mockOffers[0],
      mockOffers[1]
    ]
  },
  {
    cityName: cities[1],
    offers: [
      mockOffers[2],
      mockOffers[3]
    ]
  }
];

describe(`Favorites is rendered correctly`, () => {

  it(`Favorites is full`, () => {

    const renderer = new ShallowRenderer();

    const tree = renderer.render(
        <Router>
          <Favorites
            favoriteOffers={favoriteOffers}
          />
        </Router>
    );
    expect(tree).toMatchSnapshot();
  });

  it(`Favorites is empty`, () => {

    const renderer = new ShallowRenderer();

    const tree = renderer.render(
        <Router>
          <Favorites
            favoriteOffers={[]}
          />
        </Router>
    );
    expect(tree).toMatchSnapshot();
  });
});

