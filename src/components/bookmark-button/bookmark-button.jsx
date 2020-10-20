import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class BookmarkButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: props.isFavorite
    };
  }

  render() {
    const {
      className = `place-card`,
      width = 18,
      height = 19
    } = this.props;
    const buttonClassActive = this.state.isFavorite ? `${className}__bookmark-button--active` : ``;
    return (
      <button className={`${className}__bookmark-button ${buttonClassActive} button`} type="button">
        <svg className={`place-card__bookmark-icon`} width={width} height={height}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default BookmarkButton;
