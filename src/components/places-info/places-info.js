import React, {Fragment} from "react";
import PropTypes from "prop-types";

const PlacesInfo = (props) => {
  const {cards, cityName} = props;

  return (
    <Fragment>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cards.length} places to stay in {cityName}</b>
    </Fragment>
  );
};

PlacesInfo.propTypes = {
  cards: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired
};

export default PlacesInfo;
