import React from "react";
import PropTypes from "prop-types";

const Additions = (props) => {
  const {additions} = props;
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
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
    </div>
  );
};

Additions.propTypes = {
  additions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Additions;
