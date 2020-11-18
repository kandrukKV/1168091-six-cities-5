import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {BrowserRouter as Router} from 'react-router-dom';

const authInfo = {
  email: `email@email.com`
};

describe(`Header is rendered correctly`, () => {
  it(`Header rendered with auth info`, () => {
    const tree = renderer.create(
        <Router>
          <Header
            authInfo={authInfo}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Header rendered with out auth info`, () => {
    const tree = renderer.create(
        <Router>
          <Header
            authInfo={null}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


