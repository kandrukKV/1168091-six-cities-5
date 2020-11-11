import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {getFavoriteOffersSelector} from "../../store/selectors";
import Header from "../header/header";
import FavoritesList from "../favorites-list/favorites-list";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {AppRoute} from "../../const";
import {fetchFavoriteOffersList} from "../../store/api-actions";

class Favorites extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFavoriteOffers();
  }

  render() {

    const {favoriteOffers} = this.props;

    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            { !favoriteOffers.length
              ? <FavoritesEmpty/>
              : <FavoritesList favoriteOffers={favoriteOffers}/>
            }
          </div>
        </main>
        <footer className="footer container">
          <NavLink className="footer__logo-link" to={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </NavLink>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(fetchFavoriteOffersList());
  }
});

Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  getFavoriteOffers: PropTypes.func.isRequired
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
