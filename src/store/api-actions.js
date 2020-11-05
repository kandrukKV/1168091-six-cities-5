import {loadOffersAction, requiredAuthorizationAction, setAuthInfoAction, redirectToRouteAction, loadFavoriteOffersAction, loadOfferDetailsAction} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";

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
    api.get(`comments/${id}`),
    api.get(`/hotels/${id}/nearby`)
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
    .then(() => dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
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
