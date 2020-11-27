import React, {PureComponent} from "react";
import {redirectToRouteAction} from "../../store/action";
import {connect} from "react-redux";
import {AuthorizationStatus, APIRoute, FavoriteStatus} from "../../const";
import {getAuthorizationStatusSelector} from "../../store/selectors";
import {setOfferStatus} from "../../store/api-actions";
import PropTypes from "prop-types";

class BookmarkButton extends PureComponent {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const {isFavorite, authorizationStatus, cardId, redirectToLoginPage, changeOfferStatus} = this.props;

    switch (authorizationStatus) {
      case AuthorizationStatus.NO_AUTH:
        return redirectToLoginPage;
      case AuthorizationStatus.AUTH:
        return () => {
          return changeOfferStatus(cardId, isFavorite ? FavoriteStatus.NO : FavoriteStatus.YES);
        };
    }
    return () => {};
  }

  render() {
    const {
      className = `place-card`,
      buttonWidth = 18,
      buttonHeight = 19,
      isFavorite
    } = this.props;

    const buttonClassActive = isFavorite ? `${className}__bookmark-button--active` : ``;

    return (
      <button
        onClick={this.handleButtonClick()}
        className={`${className}__bookmark-button ${buttonClassActive} button`}
        type="button"
      >
        <svg className={`place-card__bookmark-icon`} width={buttonWidth} height={buttonHeight}>
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  authorizationStatus: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  redirectToLoginPage: PropTypes.func.isRequired,
  changeOfferStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToLoginPage() {
    dispatch(redirectToRouteAction(APIRoute.LOGIN));
  },
  changeOfferStatus(hotelId, status) {
    dispatch(setOfferStatus(hotelId, status));
  }
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
