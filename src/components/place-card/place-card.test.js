import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import PlaceCard from "./place-card";
import {mockOffers, noon} from "../../test-data/test-data";

it(`PlaceCard is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PlaceCard
        card={mockOffers[0]}
        onMouseOverHandler={noon}
        itemClassName={`itemClassName`}
        wrapClassName={`wrapClassName`}
        imageWidth={150}
        imageHeight={130}
      />
  );
  expect(tree).toMatchSnapshot();
});
