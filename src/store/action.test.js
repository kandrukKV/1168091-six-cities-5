import {
  ActionType,
  changeCityAction,
  changeSortTypeAction,
  setActiveCardAction,
  requiredAuthorizationAction,
  loadOffersAction,
  setAuthInfoAction,
  redirectToRouteAction,
  loadFavoriteOffersAction,
  loadOfferDetailsAction,
  setReviewsAction,
  updateOfferAction,
  updateFavoriteOffersAction,
  updateNearPlacesAction,
  updateCardFromOfferDetailsAction,
  setReviewFormStateAction
} from "./action";

describe(`Action creators work correctly`, () => {
  it(`changeCityAction return correct action`, () => {
    expect(changeCityAction(`CityName`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `CityName`
    });
  });

  it(`changeSortTypeAction return correct action`, () => {
    expect(changeSortTypeAction(`SortType`)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `SortType`
    });
  });

  it(`setActiveCardAction return correct action`, () => {
    expect(setActiveCardAction({cardId: 12})).toEqual({
      type: ActionType.SET_ACTIVE_CARD,
      payload: {cardId: 12}
    });
  });

  it(`requiredAuthorizationAction return correct action`, () => {
    expect(requiredAuthorizationAction(`Status`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `Status`
    });
  });

  it(`loadOffersAction return correct action`, () => {
    expect(loadOffersAction([{offerName: `Offer1`}, {offerName: `Offer2`}])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [{offerName: `Offer1`}, {offerName: `Offer2`}]
    });
  });

  it(`setAuthInfoAction return correct action`, () => {
    expect(setAuthInfoAction({authStatus: `status`})).toEqual({
      type: ActionType.SET_AUTH_INFO,
      payload: {authStatus: `status`}
    });
  });

  it(`redirectToRouteAction return correct action`, () => {
    expect(redirectToRouteAction(`/tu-tu`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/tu-tu`
    });
  });

  it(`loadFavoriteOffersAction return correct action`, () => {
    expect(loadFavoriteOffersAction([{offerName: `Offer1`}, {offerName: `Offer2`}])).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{offerName: `Offer1`}, {offerName: `Offer2`}]
    });
  });

  it(`loadOfferDetailsAction return correct action`, () => {
    expect(loadOfferDetailsAction({cardId: 12})).toEqual({
      type: ActionType.LOAD_OFFER_DETAILS,
      payload: {cardId: 12}
    });
  });

  it(`setReviewsAction return correct action`, () => {
    expect(setReviewsAction([{reviewsID: 1}])).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: [{reviewsID: 1}]
    });
  });

  it(`updateOfferAction return correct action`, () => {
    expect(updateOfferAction({offerId: 1})).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: {offerId: 1}
    });
  });

  it(`updateFavoriteOffersAction return correct action`, () => {
    expect(updateFavoriteOffersAction([{offerId: 1}])).toEqual({
      type: ActionType.UPDATE_FAVORITE_OFFERS,
      payload: [{offerId: 1}]
    });
  });

  it(`updateNearPlacesAction return correct action`, () => {
    expect(updateNearPlacesAction([{offerId: 1}])).toEqual({
      type: ActionType.UPDATE_NEARPLACES,
      payload: [{offerId: 1}]
    });
  });

  it(`updateCardFromOfferDetailsAction return correct action`, () => {
    expect(updateCardFromOfferDetailsAction({offerId: 1})).toEqual({
      type: ActionType.UPDATE_CARD_FROM_OFFER_DETAILS,
      payload: {offerId: 1}
    });
  });

  it(`setReviewFormStateAction return correct action`, () => {
    expect(setReviewFormStateAction({value: 1})).toEqual({
      type: ActionType.SET_STATE_REVIEW_FORM,
      payload: {value: 1}
    });
  });
});
