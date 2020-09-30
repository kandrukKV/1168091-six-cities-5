import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENTA_OFFERS_NUMBERS: 313
};

ReactDOM.render(
    <App
      rentaOffersNumber={Settings.RENTA_OFFERS_NUMBERS}
    />,
    document.querySelector(`#root`)
);
