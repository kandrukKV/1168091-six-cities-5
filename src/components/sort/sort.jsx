import React from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";

const Sort = (props) => {
  const {
    currentSortType,
    changeSortType,
    isOpen,
    onListItemClick,
    onListNameClick
  } = props;

  const sortTypes = Object.values(SortType);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by &nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => onListNameClick()}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {
          sortTypes.map((filterItem) => {
            return (
              <li
                key={filterItem}
                className={`places__option ${currentSortType === filterItem ? `places__option--active` : ``}`}
                tabIndex="0"
                onClick={() => onListItemClick(changeSortType, filterItem)}
              >
                {filterItem}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
};

Sort.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onListItemClick: PropTypes.func.isRequired,
  onListNameClick: PropTypes.func.isRequired
};

export default Sort;
