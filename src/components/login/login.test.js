import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow';
import {noon} from "../../test-data/test-data";
import Login from "./login";

it(`Login is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <Login
        email={``}
        password={``}
        onChangeEmail={noon}
        onChangePassword={noon}
        onSubmitForm={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
