import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {STAR_VALUES} from "../../const";


const ReviewForm = (props) => {

  const {
    rating,
    value,
    isSubmit,
    onChangeRating,
    onChangeTextArea,
  } = props;

  const isDisabled = Boolean(!value || !rating || isSubmit);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={onChangeRating}>
        {
          STAR_VALUES.map((starValue) => {
            return (
              <Fragment key={`rating-value-${starValue}`}>
                <input className="form__rating-input visually-hidden" name="rating" value={starValue} id={`${starValue}-stars`} type="radio"/>
                <label htmlFor={`${starValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onChangeTextArea}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );

};

ReviewForm.propTypes = {
  rating: PropTypes.number.isRequired,
  value: PropTypes.string,
  isSubmit: PropTypes.bool.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeTextArea: PropTypes.func.isRequired,
};

export default ReviewForm;
