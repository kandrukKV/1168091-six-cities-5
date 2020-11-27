import React from 'react';
import PropTypes from "prop-types";
import FavoritesItem from "../favorites-item/favorites-item";

const FavoritesList = ({favoriteOffers, onCityGroupClick}) => {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteOffers.map((favoriteOffer) => (
            <FavoritesItem
              key={`favorite-item-${favoriteOffer.cityName}`}
              favoritesItem={favoriteOffer}
              onCityGroupClick={onCityGroupClick}
            />
          ))
        }
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  onCityGroupClick: PropTypes.func.isRequired
};

export default FavoritesList;

