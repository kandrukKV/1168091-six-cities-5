import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import Preloader from "../preloader/preloader";

const PlaceCardList = (props) => {

  const {
    cards,
    listClassName = `cities__places-list`,
    itemClassName = `cities__place-card`,
    wrapClassName = `cities`,
    changeActiveCard
  } = props;

  if (!cards) {
    return <Preloader/>;
  }
  console.log(cards);
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
