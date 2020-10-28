import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Rating from "../rating/rating";
import PremiumLabel from "../premium-label/premium-label";
import Additions from "../additions/additions";
import ReviewsList from "../reviews-list/reviews-list";
import withReviewForm from "../hocs/with-review-form/with-review-form";
import ReviewForm from "../review-form/review-form";
import MeetTheHost from "../meet-the-host/meet-the-host";
import PropertyFeatures from "../property-features/property-features";
import placeCardProp from "../place-card/place-card.prop";
import withPlaceCardList from "../hocs/with-place-card-list/with-place-card-list";
import PlaceCardList from "../place-card-list/place-card-list";
import BookmarkButton from "../bookmark-button/bookmark-button";
import Map from "../map/map";

const ReviewFormWrapped = withReviewForm(ReviewForm);
const PlaceCardListWrapped = withPlaceCardList(PlaceCardList);

const Offer = ({card, reviews, nearPlaces}) => {

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                card.photos.map((photo, i) => {
                  return (
                    <div className="property__image-wrapper" key={`photo-${i}`}>
                      <img className="property__image" src={photo.src} alt={photo.alt}/>
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {card.isPremium && <PremiumLabel className={`property`}/>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{card.title}</h1>
                <BookmarkButton
                  isFavorite={card.isFavorite}
                  className={`property`}
                  width={31}
                  height={33}
                />
              </div>

              <Rating rating={card.rating} className={`property`}/>

              <PropertyFeatures type={card.type} bedrooms={card.bedrooms} adults={card.adults}/>

              <div className="property__price">
                <b className="property__price-value">&euro;{card.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <Additions additions={card.additions}/>

              <MeetTheHost/>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                <ReviewFormWrapped/>
              </section>
            </div>
          </div>
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
};

Offer.propTypes = {
  card: placeCardProp,
  nearPlaces: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default Offer;
