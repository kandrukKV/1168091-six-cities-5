import {loadOffersAction, requiredAuthorizationAction, setAuthInfo, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffersAction(data)))
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
      dispatch(setAuthInfo(data));
      dispatch(requiredAuthorizationAction(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);
