import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeCityAction, changeSortTypeAction} from "../../store/action";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
import OffersContent from "../offers-content/offers-content";
import OffersContentEmpty from "../offers-content-empty/offers-content-empty";
import {getCurrentCity, getCities, getCurrentSortType, getFilteredOffers} from "../../store/selectors";

const Main = (props) => {
  const {
    cards,
    currentCity,
    cities,
    currentSortType,
    changeCity,
    changeSortType
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${cards.length || `page__main--index-empty`}`}>
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          changeCity={changeCity}
        />

        {
          cards.length ?
            <OffersContent
              cards={cards}
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
  cards: getFilteredOffers(state),
  currentCity: getCurrentCity(state),
  cities: getCities(state),
  currentSortType: getCurrentSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(changeCityAction(city));
  },
  changeSortType(filterName) {
    dispatch(changeSortTypeAction(filterName));
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
