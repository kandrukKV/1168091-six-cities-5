import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withSort = (Component) => {
  class WithSort extends PureComponent {
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

    handleListItemClick(filterItem) {
      this.props.changeSortType(filterItem);
      this.setState(() => ({isOpen: false}));
    }

    render() {
      const {isOpen} = this.state;
      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onListItemClick={this.handleListItemClick}
          onListNameClick={this.handleListNameClick}
        />
      );
    }
  }

  WithSort.propTypes = {
    changeSortType: PropTypes.func.isRequired
  };

  return WithSort;
};

export default withSort;
