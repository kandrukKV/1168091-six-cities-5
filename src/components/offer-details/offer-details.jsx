import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import Rating from "../rating/rating";
import PremiumLabel from "../premium-label/premium-label";
import Additions from "../additions/additions";
import ReviewsList from "../reviews-list/reviews-list";
import MeetTheHost from "../meet-the-host/meet-the-host";
import PropertyFeatures from "../property-features/property-features";
import BookmarkButton from "../bookmark-button/bookmark-button";
import withReviewForm from "../hocs/with-review-form/with-review-form";
import ReviewForm from "../review-form/review-form";

const ReviewFormWrapped = withReviewForm(ReviewForm);

const OfferDetails = (props) => {

  const {card, reviews} = props;

  return (
    <Fragment>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            card.images.map((image, i) => {
              return (
                <div className="property__image-wrapper" key={`photo-${i}`}>
                  <img className="property__image" src={image}/>
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
              cardId={card.id}
            />
          </div>

          <Rating rating={card.rating} className={`property`}/>

          <PropertyFeatures type={card.type} bedrooms={card.bedrooms} adults={card.adults}/>

          <div className="property__price">
            <b className="property__price-value">&euro;{card.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>

          <Additions additions={card.additions}/>

          <MeetTheHost
            host={card.host}
            description={card.description}
          />

          <section className="property__reviews reviews">
            <ReviewsList reviews={reviews}/>
            <ReviewFormWrapped cardId={card.id}/>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

OfferDetails.propTypes = {
  card: placeCardProp,
  reviews: PropTypes.array.isRequired
};

export default OfferDetails;

