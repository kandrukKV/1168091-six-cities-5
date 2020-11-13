import React from "react";
import PropTypes from "prop-types";
import placeCardProp from "../../place-card/place-card.prop";

const withMouseHandlerPlaceCard = (Component) => {
  const WithMouseHandlerPlaceCard = (props) => {

    const {onMouseOverHandler, card} = props;
    return (
      <Component
        {...props}
        onMouseOver={()=> onMouseOverHandler(card)}
        onMouseOut={() => onMouseOverHandler(null)}
      />
    );
  };

  WithMouseHandlerPlaceCard.propTypes = {
    onMouseOverHandler: PropTypes.func.isRequired,
    card: placeCardProp
  };

  return WithMouseHandlerPlaceCard;
};

export default withMouseHandlerPlaceCard;
