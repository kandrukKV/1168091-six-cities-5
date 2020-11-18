import React from "react";
import renderer from "react-test-renderer";
import Additions from "./additions";
import {additions} from "../../test-data/test-data";

it(`Additions is rendered correctly`, () => {
  const tree = renderer.create(
      <Additions
        additions={additions}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
