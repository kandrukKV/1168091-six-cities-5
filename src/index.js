import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {requiredAuthorizationAction, setAuthInfo} from "./store/action";
import {fetchOffersList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import App from "./components/app/app";
import {redirect} from "./store/middlewares/redirect";

import reducer from "./store/reducers/reducer";

const api = createAPI(
    () => {
      store.dispatch(requiredAuthorizationAction(AuthorizationStatus.NO_AUTH));
      store.dispatch(setAuthInfo(null));
    }
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);


store.dispatch(fetchOffersList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
