import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewsList = ({reviews}) => {
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Review key={review.id} review={review}/>)
        }
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired)
};

export default ReviewsList;
