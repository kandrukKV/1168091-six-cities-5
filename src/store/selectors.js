import {NameSpace} from "./reducers/reducer";
import {createSelector} from 'reselect';
import {getCurrentCityOffers, sortOfersBy, adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient} from "../utils";

export const getAuthorizationStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;

export const getCurrentCitySelector = (state) => state[NameSpace.APP_STATE].currentCity;

export const getCitiesSelector = (state) => state[NameSpace.APP_STATE].cities;

export const getCurrentSortTypeSelector = (state) => state[NameSpace.APP_STATE].currentSortType;

export const getActiveCardSelector = (state) => state[NameSpace.APP_STATE].activeCard;

export const getAuthInfoSelector = (state) => state[NameSpace.USER].authInfo;

const getFavoriteOffers = (state) => state[NameSpace.API_DATA].favoriteOffers;

const getCardFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.card;

const getReviewsFromOfferDetails = (state) => state[NameSpace.API_DATA].offerDetails.reviews;

const getNearPlacesFromOfferDetails = (state) =>state[NameSpace.API_DATA].offerDetails.nearPlaces;

export const getFavoriteOffersSelector = createSelector(
    getFavoriteOffers,
    (offers) => {
      const tempArray = [];
      const unicCities = Array.from(new Set(offers.map((offer) => offer.city.name)));
      unicCities.forEach((city) => {
        tempArray.push({
          cityName: city,
          offers: adaptOffersToClient(offers.filter((offer) => offer.city.name === city))
        });
      });
      return tempArray;
    }
);

export const getCurrentOfferSelector = createSelector(
    getCardFromOfferDetails,
    (card) => adaptOfferToClient(card)
);

export const getReviewsSelector = createSelector(
    getReviewsFromOfferDetails,
    (reviews) => adaptReviewsToClient(reviews)
);

export const getNearPlacesSelector = createSelector(
    getNearPlacesFromOfferDetails,
    (nearPlaces) => adaptOffersToClient(nearPlaces)
);

const getOffers = (state) => state[NameSpace.API_DATA].offers;

export const getOffersSelector = createSelector(
    getOffers,
    (offers) => adaptOffersToClient(offers)
);

export const getFilteredOffersSelector = createSelector(
    getOffersSelector,
    getCurrentCitySelector,
    getCurrentSortTypeSelector,
    (offers, currentCity, currentSortType) => sortOfersBy[currentSortType](getCurrentCityOffers(offers, currentCity).slice())
);
