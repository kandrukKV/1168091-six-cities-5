import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {loadOfferDetails} from "../../store/api-actions";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferDetails from "../offer-details/offer-details";
import placeCardProp from "../place-card/place-card.prop";
import PlaceCardList from "../place-card-list/place-card-list";
import {getCurrentOfferSelector, getReviewsSelector, getNearPlacesSelector} from "../../store/selectors";
import {setActiveCardAction} from "../../store/action";

import Map from "../map/map";
import Preloader from "../preloader/preloader";

class Offer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getCurrentOffer(id);
  }

  componentDidUpdate(prevProps) {
    const {id} = this.props.match.params;
    if (prevProps.match.params.id !== id) {
      this.props.getCurrentOffer(id);
    }
  }

  componentWillUnmount() {
    this.props.removeActiveCard();
  }

  render() {
    const {card, reviews, nearPlaces} = this.props;
    if (!card || !reviews || !nearPlaces) {
      return (
        <div className="page">
          <main className="page__main page__main--property">
            <section className="property">
              <Preloader/>
            </section>
          </main>
        </div>
      );
    }

    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <OfferDetails card={card} reviews={reviews}/>
            <Map cards={nearPlaces} className={`property`}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlaceCardList
                listClassName="near-places__list"
                itemClassName="near-places__card"
                wrapClassName="near-places"
                cards={nearPlaces}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  card: PropTypes.oneOfType([
    placeCardProp,
    PropTypes.oneOf([null]).isRequired
  ]),
  reviews: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  nearPlaces: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  getCurrentOffer: PropTypes.func.isRequired,
  removeActiveCard: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

const mapStateToProps = (state) => ({
  card: getCurrentOfferSelector(state),
  reviews: getReviewsSelector(state),
  nearPlaces: getNearPlacesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentOffer(id) {
    dispatch(loadOfferDetails(id));
  },
  removeActiveCard() {
    dispatch(setActiveCardAction(null));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
