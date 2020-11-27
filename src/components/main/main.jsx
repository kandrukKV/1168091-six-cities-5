import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeCityAction, changeSortTypeAction} from "../../store/action";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
import OffersContent from "../offers-content/offers-content";
import OffersContentEmpty from "../offers-content-empty/offers-content-empty";
import {getCurrentCitySelector, getCitiesSelector, getCurrentSortTypeSelector, getFilteredOffersSelector} from "../../store/selectors";

const Main = (props) => {

  const {
    cards,
    currentCity,
    cities,
    currentSortType,
    onChangeCity,
    onChangeSortType
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${cards.length || `page__main--index-empty`}`}>
        <CitiesList
          cities={cities}
          currentCity={currentCity}
          onChangeCity={onChangeCity}
        />
        {
          cards.length ?
            <OffersContent
              cards={cards}
              currentCity={currentCity}
              currentSortType={currentSortType}
              onChangeSortType={onChangeSortType}
            /> :
            <OffersContentEmpty
              currentCity={currentCity}
            />
        }
      </main>
    </div>
  );

};

Main.propTypes = {
  cards: PropTypes.array.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeSortType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cards: getFilteredOffersSelector(state),
  currentCity: getCurrentCitySelector(state),
  cities: getCitiesSelector(state),
  currentSortType: getCurrentSortTypeSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCityAction(city));
  },
  onChangeSortType(filterName) {
    dispatch(changeSortTypeAction(filterName));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
