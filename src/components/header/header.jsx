import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {getAuthInfoSelector} from "../../store/selectors";
import {AppRoute} from "../../const";

const Header = ({authInfo}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <NavLink to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{authInfo ? authInfo.email : `Sign in`}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authInfo: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape({
      email: PropTypes.string.isRequired
    }).isRequired
  ])
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfoSelector(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
