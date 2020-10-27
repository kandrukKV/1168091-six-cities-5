import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlaceCardList = (props) => {

  const {
    cards,
    listClassName = `cities__places-list`,
    itemClassName = `cities__place-card`,
    wrapClassName = `cities`,
    changeActiveCard
  } = props;

  return (
    <div className={`${listClassName} places__list`}>
      {
        cards.map((card) =>
          <PlaceCard
            key={card.id}
            itemClassName={itemClassName}
            wrapClassName={wrapClassName}
            card={card}
            onMouseOverHandler={changeActiveCard}
          />)
      }
    </div>
  );
};


PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  wrapClassName: PropTypes.string
};

export default PlaceCardList;
