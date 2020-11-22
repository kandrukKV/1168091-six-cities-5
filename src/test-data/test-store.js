import configureStore from "redux-mock-store";
import {mockOffers, mosckReviews, cities} from "../test-data/test-data";

const createStore = configureStore();

const mockStore = createStore({
  API_DATA: {
    offers: mockOffers,
    favoriteOffers: mockOffers,
    offerDetails: {
      card: mockOffers[0],
      reviews: mosckReviews,
      nearPlaces: mockOffers
    }
  },
  APP_STATE: {
    currentCity: `Amsterdam`,
    cities,
    currentSortType: `Popular`,
    activeCard: null,
    reviewFormState: `EDITING`
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    authInfo: null
  }
});

export {mockStore};
