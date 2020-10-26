import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import CitiesList from "../cities-list/cities-list";
import PlaceCardList from "../place-card-list/place-card-list";
import PlacesInfo from "../places-info/places-info";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import {getOffersCurrentCity, sorting} from "../../utils";

const Main = (props) => {
  const {
    cards,
    currentCity,
    cities,
    currentSortType,
    changeCity,
    changeSortType
  } = props;

  const filteredCards = sorting[currentSortType](getOffersCurrentCity(cards, currentCity).slice());

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          changeCity={changeCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <PlacesInfo cards={filteredCards} cityName={currentCity}/>
              <Sorting currentSortType={currentSortType} changeSortType={changeSortType}/>
              <PlaceCardList cards={filteredCards} className={`cities`}/>
            </section>
            <div className="cities__right-section">
              <Map cards={filteredCards} className={`cities`}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cards: state.offers,
  currentCity: state.currentCity,
  cities: state.cities,
  filters: state.filters,
  currentSortType: state.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeSortType(filterName) {
    dispatch(ActionCreator.changeSortType(filterName));
  }
});

Main.propTypes = {
  cards: PropTypes.array.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
