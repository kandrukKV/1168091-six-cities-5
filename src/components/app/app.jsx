import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {

  const {rentaOffersNumber} = props;

  return (
    <Main rentaOffersNumber={rentaOffersNumber} />
  );
};

App.propTypes = {
  rentaOffersNumber: PropTypes.number.isRequired,
};

export default App;
