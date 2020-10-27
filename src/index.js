import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";

import {reducer} from "./store/reducer";

import cards from "./mocks/property";
import reviews from "./mocks/reviews";

const Settings = {
  RENT_OFFERS_NUMBER: cards.length
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        rentOffersNumber={Settings.RENT_OFFERS_NUMBER}
        cards={cards}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
