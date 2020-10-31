import {combineReducers} from "redux";
import {apiData} from "./api-data/api-data";
import {appState} from "./app-state/app-state";

export const NameSpace = {
  API_DATA: `API_DATA`,
  APP_STATE: `APP_STATE`,
};

export default combineReducers({
  [NameSpace.API_DATA]: apiData,
  [NameSpace.APP_STATE]: appState
});
