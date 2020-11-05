import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {loadOfferDetails} from "../../store/api-actions";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferDetails from "../offer-details/offer-details";
import placeCardProp from "../place-card/place-card.prop";
import withPlaceCardList from "../hocs/with-place-card-list/with-place-card-list";
import PlaceCardList from "../place-card-list/place-card-list";
import {getOfferDetails} from "../../store/selectors";

import Map from "../map/map";
import Preloader from "../preloader/preloader";


const PlaceCardListWrapped = withPlaceCardList(PlaceCardList);

class Offer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getOfferDetails(id);
  }

  render() {
    const {card, reviews, nearPlaces} = this.props.offerDetails;

    if (!card || !reviews || !nearPlaces) {
      return <Preloader/>;
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
              <PlaceCardListWrapped
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

const mapStateToProps = (state) => ({
  offerDetails: getOfferDetails(state)
});

const mapDispatchToProps = (dispatch) => ({
  getOfferDetails(id) {
    dispatch(loadOfferDetails(id));
  }
});

Offer.propTypes = {
  offerDetails: PropTypes.shape({
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
    ])
  }),
  getOfferDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
