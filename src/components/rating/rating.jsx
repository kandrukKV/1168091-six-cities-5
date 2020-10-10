import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const {rating, ratingClass} = props;
  const currentRating = Math.round(rating * 10);
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={ {width: `${currentRating}%`} }></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingClass: PropTypes.string.isRequired
};

export default Rating;
