import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cities, currentCity, onChangeCity} = this.props;
    return (
      <Fragment>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((city) => {
                  return (
                    <li key={city} className="locations__item" onClick={() => onChangeCity(city)}>
                      <NavLink
                        to={`/`}
                        className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
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
      </Fragment>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

export default CitiesList;

