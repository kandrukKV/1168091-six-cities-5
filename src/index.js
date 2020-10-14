import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import cards from "./mocks/property";
import reviews from "./mocks/reviews";

const Settings = {
  RENTA_OFFERS_NUMBER: cards.length
};

ReactDOM.render(
    <App
      rentaOffersNumber={Settings.RENTA_OFFERS_NUMBER}
      cards={cards}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
