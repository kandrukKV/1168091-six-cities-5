import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {mockStore} from "../../test-data/test-store";
import withSort from "./with-sort";

configure({adapter: new Adapter()});

const MockComponent = () => (<div/>);

const MockComponentWrapped = withSort(MockComponent);

it(`Property isOpen should be FALSE`, () => {
  const wrapper = shallow(
      <Provider store={mockStore}>
        <MockComponentWrapped
          isOpen={false}
          onChangeSortType={() => {}}
          onListItemClick={() => {}}
          onListNameClick={() => {}}
        />
      </Provider>
  );

  expect(wrapper.find(MockComponentWrapped).props().isOpen).toEqual(false);
});
