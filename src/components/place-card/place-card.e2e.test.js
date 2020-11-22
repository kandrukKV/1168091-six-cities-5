import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {mockOffers} from "../../test-data/test-data";
import PlaceCard from "./place-card";

configure({adapter: new Adapter()});

it(`Place card mouseout and mouseover testing`, () => {
  const onMouseOverHandler = jest.fn();

  const wrapper = shallow(
      <PlaceCard
        onMouseOverHandler={onMouseOverHandler}
        card={mockOffers[0]}
        itemClassName={`class`}
        wrapClassName={`class`}
        imageWidth={100}
        imageHeight={100}
      />
  );

  const article = wrapper.find(`article`);
  wrapper.simulate(`mouseout`);
  article.simulate(`mouseover`);

  expect(onMouseOverHandler).toHaveBeenCalledTimes(2);
});
