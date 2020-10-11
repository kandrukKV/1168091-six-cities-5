import React from "react";
import PropTypes from "prop-types";

const Additions = (props) => {
  const {additions} = props;
  return (
    <ul className="property__inside-list">
      {
        additions.map((addition, i) => {
          return (
            <li key={`prop-${i}`} className="property__inside-item">
              {addition}
            </li>
          );
        })
      }
    </ul>
  );
};

Additions.propTypes = {
  additions: PropTypes.array.isRequired
};

export default Additions;
