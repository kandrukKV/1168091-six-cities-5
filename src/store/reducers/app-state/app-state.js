import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {SortType, CITIES, ReviewFormState, STARTING_CITY} from "../../../const";

const initialState = {
  currentCity: STARTING_CITY,
  cities: CITIES,
  currentSortType: SortType.POPULAR,
  activeCard: null,
  reviewFormState: ReviewFormState.EDITING
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });
    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload
      });
    case ActionType.SET_STATE_REVIEW_FORM:
      return extend(state, {
        reviewFormState: action.payload
      });
    default:
      return state;
  }
};

export {appState};
