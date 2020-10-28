import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
import OffersContent from "../offers-content/offers-content";
import OffersContentEmpty from "../offers-content-empty/offers-content-empty";
import {getCurrentCityOffers, sortOfersBy} from "../../utils";

const Main = (props) => {
  const {
    cards,
    currentCity,
    cities,
    currentSortType,
    changeCity,
    changeSortType
  } = props;

  const filteredCards = sortOfersBy[currentSortType](getCurrentCityOffers(cards, currentCity).slice());

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          changeCity={changeCity}
        />

        {
          filteredCards.length > 0 ?
            <OffersContent
              filteredCards={filteredCards}
              currentCity={currentCity}
              currentSortType={currentSortType}
              changeSortType={changeSortType}
            /> :
            <OffersContentEmpty
              currentCity={currentCity}
            />
        }
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
