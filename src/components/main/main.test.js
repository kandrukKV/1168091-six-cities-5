import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {Main} from "./main";
import {cities, noon, mockOffers} from "../../test-data/test-data";

it(`Main is rendered correctly with offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Main
        cities={cities}
        cards={mockOffers}
        currentCity={mockOffers[0].city.name}
        onChangeCity={noon}
        currentSortType={`sortType`}
        onChangeSortType={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`Main is rendered correctly with out offers`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Main
        cities={cities}
        cards={[]}
        currentCity={mockOffers[0].city.name}
        onChangeCity={noon}
        currentSortType={`sortType`}
        onChangeSortType={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
