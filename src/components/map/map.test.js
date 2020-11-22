import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {mockOffers} from "../../test-data/test-data";

it(`Render correctly component Map`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer.create(
      <Map
        cards={mockOffers}
        activeCard={mockOffers[0]}
        className={`className`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
