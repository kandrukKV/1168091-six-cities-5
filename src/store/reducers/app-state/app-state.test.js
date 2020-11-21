import {appState} from "./app-state";
import {ActionType} from "../../action";
import {mockOffers, mosckReviews} from "../../../test-data/test-data";
import {CITIES, SortType, ReviewFormState, STARTING_CITY} from "../../../const";

describe(`app-state reducer testing`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appState(void 0, {})).toEqual({
      currentCity: STARTING_CITY,
      cities: CITIES,
      currentSortType: SortType.POPULAR,
      activeCard: null,
      reviewFormState: ReviewFormState.EDITING
    });
  });

  it(`Reducer checges current city`, () => {
    expect(appState(
        {
          currentCity: STARTING_CITY,
        },
        {
          type: ActionType.CHANGE_CITY,
          payload: `NEW YORK`
        }
    )).toEqual({
      currentCity: `NEW YORK`,
    });
  });

  it(`Reducer checges current sort type`, () => {
    expect(appState(
        {
          currentSortType: SortType.POPULAR,
        },
        {
          type: ActionType.CHANGE_SORT_TYPE,
          payload: SortType.PRICE_HIGHT_TO_LOW
        }
    )).toEqual({
      currentSortType: SortType.PRICE_HIGHT_TO_LOW
    });
  });

  it(`Reducer checges current active card`, () => {
    expect(appState(
        {
          activeCard: null,
        },
        {
          type: ActionType.SET_ACTIVE_CARD,
          payload: mockOffers[0]
        }
    )).toEqual({
      activeCard: mockOffers[0],
    });
  });

  it(`Reducer checges current review form state`, () => {
    expect(appState(
        {
          reviewFormState: ReviewFormState.EDITING
        },
        {
          type: ActionType.SET_STATE_REVIEW_FORM,
          payload: ReviewFormState.DEFAULT
        }
    )).toEqual({
      reviewFormState: ReviewFormState.DEFAULT
    });
  });
});
