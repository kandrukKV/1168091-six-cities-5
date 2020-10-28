import React from "react";
import PropTypes from "prop-types";
import Map from "../map/map";
import withPlaceCardList from "../hocs/with-place-card-list/with-place-card-list";
import PlaceCardList from "../place-card-list/place-card-list";
import PlacesInfo from "../places-info/places-info";
import Sort from "../sort/sort";
import withSort from "../hocs/with-sort/with-sort";

const PlaceCardListWrapped = withPlaceCardList(PlaceCardList);
const SortWrapped = withSort(Sort);

const OffersContent = (props) => {
  const {
    filteredCards,
    currentCity,
    currentSortType,
    changeSortType
  } = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <PlacesInfo cards={filteredCards} cityName={currentCity}/>
          <SortWrapped currentSortType={currentSortType} changeSortType={changeSortType}/>
          <PlaceCardListWrapped cards={filteredCards} className={`cities`}/>
        </section>
        <div className="cities__right-section">
          <Map cards={filteredCards} className={`cities`}/>
        </div>
      </div>
    </div>
  );
};

OffersContent.propTypes = {
  filteredCards: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

export default OffersContent;
