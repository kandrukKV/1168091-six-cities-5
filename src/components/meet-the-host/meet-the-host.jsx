import React from "react";
import PropTypes from "prop-types";


const MeetTheHost = ({host, description}) => {

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {host.name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

MeetTheHost.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  description: PropTypes.string.isRequired
};

export default MeetTheHost;
