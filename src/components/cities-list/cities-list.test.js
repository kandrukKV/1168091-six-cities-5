import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";
import {BrowserRouter as Router} from 'react-router-dom';
import {cities, noon} from "../../test-data/test-data";

const currentCity = cities[0];

it(`CitiesList is rendered correctly`, () => {
  const tree = renderer.create(
      <Router>
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          changeCity={noon}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
