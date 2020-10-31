import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {requiredAuthorizationAction} from "./store/action";
import {fetchOffersList} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import App from "./components/app/app";

import reducer from "./store/reducers/reducer";

const api = createAPI(
    () => store.dispatch(requiredAuthorizationAction(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
