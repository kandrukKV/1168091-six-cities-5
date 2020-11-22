import React from "react";
import renderer from "react-test-renderer";
import withSort from "./with-sort";
import {noon} from "../../test-data/test-data";

const MockComponent = () => {
  return (
    <div/>
  );
};

const MockComponentWrapped = withSort(MockComponent);

it(`withSort is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        isOpen={true}
        onListItemClick={noon}
        onListNameClick={noon}
        changeSortType={noon}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
