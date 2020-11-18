import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withSort from "./with-sort";
import {noon} from "../../test-data/test-data";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withSort(MockComponent);

it(`withSort is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        isOpen={true}
        onListItemClick={noon}
        onListNameClick={noon}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
