import React from 'react';
import PropTypes from "prop-types";
import FavoritesItem from "../favorites-item/favorites-item";

const FavoritesList = (props) => {

  const {favoriteOffers} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteOffers.map((favoriteOffer) => (
            <FavoritesItem
              key={`favorite-item-${favoriteOffer.cityName}`}
              favoritesItem={favoriteOffer}
            />
          ))
        }
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array.isRequired
};

export default FavoritesList;

