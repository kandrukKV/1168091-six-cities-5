import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Filters extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onMouseClickHandler = this.onMouseClickHandler.bind(this);
  }

  onMouseClickHandler() {
    this.setState(() => ({isOpen: !this.state.isOpen}));
  }

  render() {
    const {filters, activeFilter} = this.props;
    const {isOpen} = this.state;
    return (
      <form
        className="places__sorting"
        action="#"
        method="get"
        onClick={() => this.onMouseClickHandler()}
      >
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          {activeFilter}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {
            filters.map((filterItem) => {
              return (
                <li key={filterItem} className={`places__option ${activeFilter === filterItem ? `places__option--active` : ``}`} tabIndex="0">{filterItem}</li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired
};

export default Filters;
