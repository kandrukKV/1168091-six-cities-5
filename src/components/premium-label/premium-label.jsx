import React from "react";
import PropTypes from "prop-types";

const PremiumLabel = (props) => {
  const {isPremium, labelClass} = props;
  if (isPremium) {
    return (
      <div className={`${labelClass}__mark`}>
        <span>Premium</span>
      </div>
    );
  }
  return null;
};

PremiumLabel.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  labelClass: PropTypes.string.isRequired
};

export default PremiumLabel;
