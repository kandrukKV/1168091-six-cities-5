import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {MAX_NUMBERS_OF_REVIEWS} from "../../const";

const ReviewsList = ({reviews}) => {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.slice(0, MAX_NUMBERS_OF_REVIEWS).map((review) => <Review key={`rev-${review.id}`} review={review}/>)
        }
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
