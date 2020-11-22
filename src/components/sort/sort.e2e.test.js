import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort";

configure({adapter: new Adapter()});

it(`Sort select type`, () => {

  const itemClick = jest.fn();

  const wrapper = shallow(
      <Sort
        currentSortType={`Popular`}
        isOpen={true}
        onListItemClick={itemClick}
        onListNameClick={() => {}}
      />
  );

  const items = wrapper.find(`li`);
  items.forEach((item) => {
    item.simulate(`click`);
  });

  expect(itemClick).toHaveBeenCalledTimes(items.length);

});

it(`Sort open list`, () => {

  const itemClick = jest.fn();

  const wrapper = shallow(
      <Sort
        currentSortType={`Popular`}
        isOpen={true}
        onListItemClick={() => {}}
        onListNameClick={itemClick}
      />
  );

  const items = wrapper.find(`span.places__sorting-type`);
  items.simulate(`click`);

  expect(itemClick).toHaveBeenCalledTimes(1);

});
