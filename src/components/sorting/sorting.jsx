import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleListNameClick = this.handleListNameClick.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListNameClick() {
    this.setState(() => ({isOpen: !this.state.isOpen}));
  }

  handleListItemClick(cb, filterItem) {
    cb(filterItem);
    this.setState(() => ({isOpen: false}));
  }

  render() {
    const {currentSortType, changeSortType} = this.props;
    const {isOpen} = this.state;
    const sortTypes = Object.values(SortType);

    return (
      <form
        className="places__sorting"
        action="#"
        method="get"
      >
        <span className="places__sorting-caption">Sort by &nbsp;</span>
        <span className="places__sorting-type" tabIndex="0" onClick={() => this.handleListNameClick()}>
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
                  onClick={() => this.handleListItemClick(changeSortType, filterItem)}
                >
                  {filterItem}
                </li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

Sorting.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired
};

export default Sorting;
