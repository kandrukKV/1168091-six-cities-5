import React, {PureComponent} from "react";

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

    handleListItemClick(cb, filterItem) {
      cb(filterItem);
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
  return WithSort;
};

export default withSort;
