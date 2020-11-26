import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferDetails from "./offer-details";
import {mockOffers, mockReviews} from "../../test-data/test-data";

it(`OfferDetails is rendered correctly with offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <OfferDetails
        card={mockOffers[0]}
        reviews={mockReviews}
      />
  );
  expect(tree).toMatchSnapshot();
});
