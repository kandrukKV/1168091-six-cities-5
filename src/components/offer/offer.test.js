import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {Offer} from "./offer";
import {mockOffers, mosckReviews, noon} from "../../test-data/test-data";

it(`Offer is rendered correctly with offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Offer
        id={1}
        card={mockOffers[0]}
        reviews={mosckReviews}
        nearPlaces={mockOffers}
        getCurrentOffer={noon}
        removeActiveCard={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
