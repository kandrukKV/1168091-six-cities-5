import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BookmarkButton} from "./bookmark-button";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

it(`button behavior when authorization status AUTH`, () => {

  const redirectToLoginPage = jest.fn();
  const changeOfferStatus = jest.fn();
  const authorizationStatus = AuthorizationStatus.AUTH;

  const wrapper = shallow(
      <BookmarkButton
        redirectToLoginPage={redirectToLoginPage}
        changeOfferStatus={changeOfferStatus}
        authorizationStatus={authorizationStatus}
        cardId={1}
        isFavorite={true}
      />
  );

  const button = wrapper.find(`button`);

  button.simulate(`click`);

  expect(changeOfferStatus).toHaveBeenCalledTimes(1);
  expect(redirectToLoginPage).toHaveBeenCalledTimes(0);

});

it(`button behavior when authorization status NO_AUTH`, () => {

  const redirectToLoginPage = jest.fn();
  const changeOfferStatus = jest.fn();
  const authorizationStatus = AuthorizationStatus.NO_AUTH;

  const wrapper = shallow(
      <BookmarkButton
        redirectToLoginPage={redirectToLoginPage}
        changeOfferStatus={changeOfferStatus}
        authorizationStatus={authorizationStatus}
        cardId={1}
        isFavorite={true}
      />
  );

  const button = wrapper.find(`button`);

  button.simulate(`click`);

  expect(changeOfferStatus).toHaveBeenCalledTimes(0);
  expect(redirectToLoginPage).toHaveBeenCalledTimes(1);

});
