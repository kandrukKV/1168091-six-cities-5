import React from "react";
import renderer from "react-test-renderer";
import Rating from "./rating";

const className = `rating-class`;

describe(`Rating render correctly`, () => {
  it(`Rating is 0`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={0}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Rating is 1`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Rating is 2`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={2}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Rating is 3`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={3}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Rating is 4`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={4}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Rating is 5`, () => {
    const tree = renderer.create(
        <Rating
          className={className}
          rating={5}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
