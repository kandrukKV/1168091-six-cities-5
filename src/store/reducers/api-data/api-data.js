import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
};

const apiData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    default:
      return state;
  }
};

export {apiData};
