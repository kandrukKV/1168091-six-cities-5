import React from "react";
import PropTypes from "prop-types";

const PremiumLabel = (props) => {
  const {className} = props;

  return (
    <div className={`${className}__mark`}>
      <span>Premium</span>
    </div>
  );

};

PremiumLabel.propTypes = {
  className: PropTypes.string.isRequired
};

export default PremiumLabel;
