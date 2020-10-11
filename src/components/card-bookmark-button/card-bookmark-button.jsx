import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CardBookmarkButton extends PureComponent {
  constructor(props) {
    const {isFavorite} = props;
    super(props);
    this.state = {isFavorite};
  }

  render() {
    const buttonClassActive = this.state.isFavorite ? `place-card__bookmark-button--active` : ``;
    return (
      <button className={`place-card__bookmark-button ${buttonClassActive} button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

CardBookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired
};

export default CardBookmarkButton;
