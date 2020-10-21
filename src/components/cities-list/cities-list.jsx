import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const CitiesList = (props) => {
  const {cities, currentCity, changeCity} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => {
              return (
                <li key={city} className="locations__item">
                  <NavLink
                    to={`/`}
                    className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
                    onClick={() => changeCity(city)}
                  >
                    <span>{city}</span>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

export default CitiesList;

