export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_AUTH_INFO: `SET_AUTH_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_OFFER_DETAILS: `LOAD_OFFER_DETAILS`,
  SET_REVIEWS: `SET_REVIEWS`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  UPDATE_FAVORITE_OFFERS: `UPDATE_FAVORITE_OFFERS`,
  UPDATE_NEARPLACES: `UPDATE_NEARPLACES`,
  UPDATE_OFFER_DETAILS_CARD: `UPDATE_OFFER_DETAILS_CARD`,
  UPDATE_CARD_FROM_OFFER_DETAILS: `UPDATE_CARD_FROM_OFFER_DETAILS`,
  SET_REVIEW_FORM_ERROR: `SET_REVIEW_FORM_ERROR`
};

export const changeCityAction = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const changeSortTypeAction = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType
});

export const setActiveCardAction = (activeCard) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: activeCard
});

export const requiredAuthorizationAction = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const loadOffersAction = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const setAuthInfoAction = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo
});

export const redirectToRouteAction = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const loadFavoriteOffersAction = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers
});

export const loadOfferDetailsAction = (offerDeatails) => ({
  type: ActionType.LOAD_OFFER_DETAILS,
  payload: offerDeatails
});

export const setReviewsAction = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews
});

export const updateOfferAction = (offer) => ({
  type: ActionType.UPDATE_OFFER,
  payload: offer
});

export const updateFavoriteOffersAction = (offers) => ({
  type: ActionType.UPDATE_FAVORITE_OFFERS,
  payload: offers
});

export const updateNearPlacesAction = (nearPlaces) => ({
  type: ActionType.UPDATE_NEARPLACES,
  payload: nearPlaces
});

export const updateCardFromOfferDetailsAction = (offer) => ({
  type: ActionType.UPDATE_CARD_FROM_OFFER_DETAILS,
  payload: offer
});

export const setReviewFormErrorAction = (error) => ({
  type: ActionType.SET_REVIEW_FORM_ERROR,
  payload: error
});

