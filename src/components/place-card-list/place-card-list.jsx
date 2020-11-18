import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import Preloader from "../preloader/preloader";
import {setActiveCardAction} from "../../store/action";

const PlaceCardList = (props) => {

  const {
    cards,
    listClassName = `cities__places-list`,
    itemClassName = `cities__place-card`,
    wrapClassName = `cities`,
    imageWidth = 260,
    imageHeight = 200,
    changeActiveCard
  } = props;

  if (!cards) {
    return <Preloader/>;
  }

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
            imageWidth={imageWidth}
            imageHeight={imageHeight}

          />)
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(activeCard) {
    dispatch(setActiveCardAction(activeCard));
  }
});

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  wrapClassName: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number
};

export {PlaceCardList};
export default connect(null, mapDispatchToProps)(PlaceCardList);
