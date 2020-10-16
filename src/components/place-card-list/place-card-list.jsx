import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class PlaceCardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
  }

  onMouseOverHandler(card) {
    this.setState(() => ({activeCard: card}));
  }

  render() {
    const {
      cards,
      listClassName = `cities__places-list`,
      itemClassName = `cities__place-card`,
      wrapClassName = `cities`
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
              onMouseOverHandler={this.onMouseOverHandler}
            />)
        }
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  wrapClassName: PropTypes.string
};

export default PlaceCardList;
