import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {setActiveCardAction} from "../../store/action";

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
      dispatch(setActiveCardAction(activeCard));
    }
  });

  return connect(null, mapDispatchToProps)(WithPlaceCardList);
};

export default withPlaceCardList;
