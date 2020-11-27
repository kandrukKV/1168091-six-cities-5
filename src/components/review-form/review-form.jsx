import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {STAR_VALUES, ReviewFormProperty} from "../../const";


const ReviewForm = (props) => {

  const {
    rating,
    value,
    isFormDisabled,
    onChangeRating,
    onChangeTextArea,
    onSubmit,
  } = props;

  const isSubmitDisabled =
    !rating ||
    value.length < ReviewFormProperty.MINLENGTH ||
    value.length > ReviewFormProperty.MAXLENGTH;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STAR_VALUES.map(({starValue, title}) => {
            return (
              <Fragment key={`rating-value-${starValue}`}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating" value={starValue}
                  id={`${starValue}-stars`}
                  type="radio"
                  checked={(starValue - rating) === 0}
                  onChange={onChangeRating}
                  disabled={isFormDisabled}
                />
                <label
                  htmlFor={`${starValue}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={title}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={value}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onChangeTextArea}
        disabled={isFormDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormDisabled || isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  rating: PropTypes.number.isRequired,
  value: PropTypes.string,
  isFormDisabled: PropTypes.bool.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeTextArea: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ReviewForm;
