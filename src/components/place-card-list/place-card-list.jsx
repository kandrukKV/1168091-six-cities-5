import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cards,
      listClassName = `cities__places-list`,
      itemClassName = `cities__place-card`,
      wrapClassName = `cities`,
      changeActiveCard
    } = this.props;

    return (
      <div className={`${listClassName} places__list`}>
        {
          cards.map((card) =>
            <PlaceCard
              key={card.id}
              itemClassName={itemClassName}
              wrapClassName={wrapClassName}
              card={card}
              onMouseOverHandler={changeActiveCard}
            />)
        }
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard(activeCard) {
    dispatch(ActionCreator.setActiveCard(activeCard));
  }
});

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  wrapClassName: PropTypes.string
};

export {PlaceCardList};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCardList);
