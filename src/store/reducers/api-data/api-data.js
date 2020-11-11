import {extend, updateOffers, deleteOffer} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  favoriteOffers: [],
  offerDetails: {
    card: null,
    reviews: [],
    nearPlaces: []
  }
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.LOAD_OFFER_DETAILS:
      return extend(state, {
        offerDetails: action.payload
      });
    case ActionType.SET_REVIEWS:
      return extend(state, {
        offerDetails: extend(state.offerDetails, {
          reviews: action.payload
        })
      });
    case ActionType.UPDATE_OFFER:
      return extend(state, {
        offers: updateOffers(state.offers, action.payload)
      });
    case ActionType.UPDATE_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: deleteOffer(state.favoriteOffers, action.payload)
      });
    case ActionType.UPDATE_NEARPLACES:
      return extend(state, {
        offerDetails: extend(state.offerDetails, {
          nearPlaces: updateOffers(state.offerDetails.nearPlaces, action.payload)
        })
      });
    case ActionType.UPDATE_CARD_FROM_OFFER_DETAILS:
      return extend(state, {
        offerDetails: extend(state.offerDetails, {
          card: action.payload
        })
      });
    default:
      return state;
  }
};

export {apiData};
