import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import BookmarkButton from "../bookmark-button/bookmark-button";
import Rating from "../rating/rating";
import PremiumLabel from "../premium-label/premium-label";
import placeCardProp from "../place-card/place-card.prop";
import {AppRoute} from "../../const";

const PlaceCard = ({card, onMouseOverHandler, itemClassName, wrapClassName}) => {
  const {
    id,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    title,
    previewImage
  } = card;

  return (
    <article className={`${itemClassName} place-card`} onMouseOver={()=> onMouseOverHandler(card)} onMouseOut={() => onMouseOverHandler(null)}>
      {isPremium && <PremiumLabel className={`place-card`}/>}
      <div className={`${wrapClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite}/>
        </div>
        <Rating rating={rating} className={`place-card`}/>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: placeCardProp,
  onMouseOverHandler: PropTypes.func.isRequired,
  itemClassName: PropTypes.string.isRequired,
  wrapClassName: PropTypes.string.isRequired
};

export default PlaceCard;
