import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const {rating, className} = props;
  const currentRating = Math.round(rating * 20);
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={ {width: `${currentRating}%`} }></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default Rating;
