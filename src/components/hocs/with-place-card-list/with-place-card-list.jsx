import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";

const withPlaceCardList = (Component) => {
  class WithPlaceCardList extends PureComponent {
    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    changeActiveCard(activeCard) {
      dispatch(ActionCreator.setActiveCard(activeCard));
    }
  });

  return connect(null, mapDispatchToProps)(WithPlaceCardList);
};

export default withPlaceCardList;
