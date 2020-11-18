import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import OffersContent from "./offers-content";
import {noon, mockOffers} from "../../test-data/test-data";

it(`OffersContent is rendered correctly with offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OffersContent
        cards={mockOffers}
        currentCity={mockOffers[0].city.name}
        currentSortType={`sortType`}
        changeSortType={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
