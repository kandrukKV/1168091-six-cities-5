import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const {rating, className, isExactly = false} = props;
  const currentRating = isExactly ? rating * 20 : Math.round(rating) * 20;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={ {width: `${currentRating}%`} }></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isExactly && (<span className="property__rating-value rating__value">{rating}</span>)}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  isExactly: PropTypes.bool
};

export default Rating;
