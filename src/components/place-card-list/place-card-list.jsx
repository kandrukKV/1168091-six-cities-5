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
    const {cards} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          cards.map((card) => <PlaceCard key={card.id} card={card} onMouseOverHandler={this.onMouseOverHandler}/>)
        }
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  cards: PropTypes.array.isRequired
};

export default PlaceCardList;
