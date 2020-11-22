import React from "react";
import renderer from "react-test-renderer";
import MeetTheHost from "./meet-the-host";
import {mockOffers} from "../../test-data/test-data";

const {host, description} = mockOffers[0];

it(`Header rendered with auth info`, () => {
  const tree = renderer.create(
      <MeetTheHost
        host={host}
        description={description}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
