import {extend} from "../utils";
import {ActionType} from "./action";
import {Filter} from "../const";
import offers, {CITIES} from "../mocks/property";

const initialState = {
  offers,
  currentCity: `Amsterdam`,
  cities: CITIES,
  filters: Object.values(Filter),
  activeFilter: Filter.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload
      });
    case ActionType.GET_OFFERS:
      return state.offers;
  }

  return state;
};

export {reducer};
