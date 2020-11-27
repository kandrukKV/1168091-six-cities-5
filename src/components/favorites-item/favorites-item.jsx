import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";
import {FavoritesItemImageSize} from "../../const";
import placeCardProp from "../place-card/place-card.prop";

const FavoritesItem = ({favoritesItem, onCityGroupClick}) => {

  const {cityName, offers} = favoritesItem;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <NavLink
            className="locations__item-link" to={AppRoute.ROOT}
            onClick={() => onCityGroupClick(cityName)}
          >
            <span>{cityName}</span>
          </NavLink>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((card) => (
            <PlaceCard
              key={`fav-${card.id}`}
              itemClassName={`favorites__card`}
              wrapClassName={`favorites`}
              imageWidth={FavoritesItemImageSize.WIDTH}
              imageHeight={FavoritesItemImageSize.HEIGHT}
              card={card}
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
    offers: PropTypes.arrayOf(placeCardProp).isRequired
  }),
  onCityGroupClick: PropTypes.func.isRequired
};

export default FavoritesItem;
