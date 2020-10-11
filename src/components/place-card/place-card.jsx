import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import CardBookmarkButton from "../card-bookmark-button/card-bookmark-button";
import Rating from "../rating/rating";
import PremiumLabel from "../premium-label/premium-label";

const PlaceCard = (props) => {
  const {card, onMouseOverHandler} = props;
  const {
    id,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    title,
    photos
  } = card;

  const generalPhoto = photos[0];

  return (
    <article className="cities__place-card place-card" onMouseOver={()=> onMouseOverHandler(card)}>
      <PremiumLabel isPremium={isPremium} labelClass={`place-card`}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={generalPhoto.src} width="260" height="200" alt={generalPhoto.alt}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardBookmarkButton isFavorite={isFavorite}/>
        </div>
        <Rating rating={rating} ratingClass={`place-card`}/>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }))
  }),
  onMouseOverHandler: PropTypes.func.isRequired
};

export default PlaceCard;
