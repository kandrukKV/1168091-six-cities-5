import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {Login} from "./login";

it(`Login is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Login
        onSubmit={() => {}}
      />
  );
  expect(tree).toMatchSnapshot();
});
