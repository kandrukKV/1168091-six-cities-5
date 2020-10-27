import React from "react";
import PropTypes from "prop-types";

const BookmarkButton = (props) => {

  const {
    className = `place-card`,
    width = 18,
    height = 19,
    isFavorite
  } = props;

  const buttonClassActive = isFavorite ? `${className}__bookmark-button--active` : ``;

  return (
    <button className={`${className}__bookmark-button ${buttonClassActive} button`} type="button">
      <svg className={`place-card__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );

};

BookmarkButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default BookmarkButton;
