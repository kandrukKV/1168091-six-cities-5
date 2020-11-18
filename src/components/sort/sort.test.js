import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Sort from "./sort";
import {noon} from "../../test-data/test-data";
import {SortType} from "../../const";

it(`Sors is open rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Sort
        currentSortType={SortType.POPULAR}
        changeSortType={noon}
        isOpen={true}
        onListItemClick={noon}
        onListNameClick={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`Sors is close rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Sort
        currentSortType={SortType.POPULAR}
        changeSortType={noon}
        isOpen={false}
        onListItemClick={noon}
        onListNameClick={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
