import React from "react";
import PropTypes from "prop-types";

const PropertyFeatures = ({type, badrooms, adults}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {badrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {adults} adults
      </li>
    </ul>
  );
};

PropertyFeatures.propTypes = {
  type: PropTypes.string,
  badrooms: PropTypes.number,
  adults: PropTypes.number
};

export default PropertyFeatures;
