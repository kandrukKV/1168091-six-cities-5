import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {PlaceCardList} from "./place-card-list";
import {mockOffers, noon} from "../../test-data/test-data";

it(`PlaceCardList is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PlaceCardList
        cards={mockOffers}
        listClassName={`listClassName`}
        itemClassName={`itemClassName`}
        wrapClassName={`wrapClassName`}
        imageWidth={260}
        imageHeight={200}
        changeActiveCard={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`PlaceCardList is rendered correctly with default props`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PlaceCardList
        cards={mockOffers}
        changeActiveCard={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`PlaceCardList is rendered correctly with out offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PlaceCardList
        cards={[]}
        changeActiveCard={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

