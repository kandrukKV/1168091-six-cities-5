import React from "react";
import renderer from "react-test-renderer";
import {BookmarkButton} from "./bookmark-button";
import {noon} from "../../test-data/test-data";

describe(`BookmarkButton render correctly`, () => {
  it(`BookmarkButton is favorite`, () => {
    const tree = renderer.create(
        <BookmarkButton
          isFavorite={true}
          authorizationStatus={`NO_AUTH`}
          cardId={1}
          buttonWidth={22}
          buttonHeight={33}
          className={`new_class`}
          redirectToLoginPage={noon}
          changeOfferStatus={noon}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`BookmarkButton is't favorite`, () => {
    const tree = renderer.create(
        <BookmarkButton
          isFavorite={false}
          authorizationStatus={`AUTH`}
          cardId={1}
          buttonWidth={22}
          buttonHeight={33}
          className={`new_class`}
          redirectToLoginPage={noon}
          changeOfferStatus={noon}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`BookmarkButton with default values`, () => {
    const tree = renderer.create(
        <BookmarkButton
          isFavorite={false}
          authorizationStatus={`AUTH`}
          cardId={1}
          redirectToLoginPage={noon}
          changeOfferStatus={noon}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
