import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {PrivateRoute} from "./private-route";
import {noon} from "../../test-data/test-data";
import {AuthorizationStatus} from "../../const";

it(`PrivateRoute is rendered correctly with AuthorizationStatus.AUTH`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PrivateRoute
        path={`/`}
        exact={true}
        render={noon}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`PrivateRoute is rendered correctly with AuthorizationStatus.NO_AUTH`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <PrivateRoute
        path={`/`}
        exact={true}
        render={noon}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />
  );
  expect(tree).toMatchSnapshot();
});
