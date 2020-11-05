import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  favoriteOffers: [],
  offerDetails: {
    card: null,
    reviews: null,
    nearPlaces: null
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
    default:
      return state;
  }
};

export {apiData};
