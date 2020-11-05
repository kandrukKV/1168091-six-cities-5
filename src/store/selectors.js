import {NameSpace} from "./reducers/reducer";
import {createSelector} from 'reselect';
import {getCurrentCityOffers, sortOfersBy, adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient} from "../utils";

export const getOffers = (state) => state[NameSpace.API_DATA].offers;

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getCurrentCity = (state) => state[NameSpace.APP_STATE].currentCity;

export const getCities = (state) => state[NameSpace.APP_STATE].cities;

export const getCurrentSortType = (state) => state[NameSpace.APP_STATE].currentSortType;

export const getActiveCard = (state) => state[NameSpace.APP_STATE].activeCard;

export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;

export const getOfferDetails = (state) => ({
  card: state[NameSpace.API_DATA].offerDetails.card ? adaptOfferToClient(state[NameSpace.API_DATA].offerDetails.card) : null,
  reviews: state[NameSpace.API_DATA].offerDetails.reviews ? adaptReviewsToClient(state[NameSpace.API_DATA].offerDetails.reviews) : null,
  nearPlaces: state[NameSpace.API_DATA].offerDetails.nearPlaces ? adaptOffersToClient(state[NameSpace.API_DATA].offerDetails.nearPlaces) : null
});

const adaptedOffers = createSelector(
    getOffers,
    (offers) => adaptOffersToClient(offers)
);

export const getFilteredOffers = createSelector(
    adaptedOffers,
    getCurrentCity,
    getCurrentSortType,
    (offers, currentCity, currentSortType) => sortOfersBy[currentSortType](getCurrentCityOffers(offers, currentCity).slice())
);
