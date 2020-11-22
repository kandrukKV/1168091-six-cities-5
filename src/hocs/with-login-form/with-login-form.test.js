import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import withLoginForm from "./with-login-form";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {mockStore} from "../../test-data/test-store";

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


const MockComponentWrapped = withLoginForm(MockComponent);

it(`withReviewsForm is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Provider store={mockStore}>
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
