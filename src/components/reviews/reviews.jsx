import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Rating from "../rating/rating";

const Reviews = (props) => {
  const {reviews} = props;
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => {
            return (
              <li key={`review-${review.id}`} className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar"/>
                  </div>
                  <span className="reviews__user-name">
                    {review.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <Rating rating={review.rating} ratingClass={`reviews`}/>
                  <p className="reviews__text">
                    {review.text}
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                </div>
              </li>
            );
          })
        }
      </ul>
    </Fragment>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }))
};

export default Reviews;
