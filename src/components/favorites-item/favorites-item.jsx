import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const FavoritesItem = (props) => {

  const {cityName, offers} = props.favoritesItem;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((card) => (
            <PlaceCard
              key={`fav-${card.id}`}
              itemClassName={`favorites__card`}
              wrapClassName={`favorites`}
              imageWidth={150}
              imageHeight={110}
              card={card}
              onMouseOverHandler={() => {}}
            />
          ))
        }
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  favoritesItem: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    offers: PropTypes.array.isRequired
  })
};

export default FavoritesItem;
