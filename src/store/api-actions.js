import {
  loadOffersAction,
  requiredAuthorizationAction,
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
import {AuthorizationStatus, APIRoute, AppRoute, ReviewFormState} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffersAction(data)))
);

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffersAction(data)))
);

export const loadOfferDetails = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.HOTELS}/${id}`),
    api.get(`${APIRoute.COMMENTS}/${id}`),
    api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
  ]).then((details) => {
    dispatch(loadOfferDetailsAction({
      card: details[0].data,
      reviews: details[1].data,
      nearPlaces: details[2].data
    }));
  })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(setAuthInfoAction(data));
      dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

export const postComment = ({comment, rating, hotelId}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${hotelId}`, {comment, rating})
    .then(({data}) => {
      dispatch(setReviewsAction(data));
      dispatch(setReviewFormStateAction(ReviewFormState.DEFAULT));
      dispatch(setReviewFormStateAction(ReviewFormState.EDITING));
    })
    .catch(() => dispatch(setReviewFormStateAction(ReviewFormState.SENDING_ERROR)))
);

export const setOfferStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${hotelId}/${status}`)
    .then(({data}) => {
      dispatch(updateOfferAction(data));
      dispatch(updateFavoriteOffersAction(data));
      dispatch(updateNearPlacesAction(data));
      dispatch(updateCardFromOfferDetailsAction(data));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthInfoAction(data));
      dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRouteAction(AppRoute.ROOT)))
);
