import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ReviewForm from "./review-form";
import {noon} from "../../test-data/test-data";

it(`ReviewForm with data is rendered correctly`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <ReviewForm
        rating={3}
        value={`Value`}
        isFormDisabled={false}
        onChangeRating={noon}
        onChangeTextArea={noon}
        onSubmit={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`ReviewForm with data and Form is't disabled`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <ReviewForm
        rating={0}
        value={``}
        isFormDisabled={false}
        onChangeRating={noon}
        onChangeTextArea={noon}
        onSubmit={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});

it(`ReviewForm with data and Form is disabled`, () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
      <ReviewForm
        rating={0}
        value={``}
        isFormDisabled={true}
        onChangeRating={noon}
        onChangeTextArea={noon}
        onSubmit={noon}
      />
  );
  expect(tree).toMatchSnapshot();
});
