import React, {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatusSelector, getReviewFormStateSelector} from "../../store/selectors";
import {postComment} from "../../store/api-actions";
import {setReviewFormStateAction} from "../../store/action";
import {AuthorizationStatus, ReviewFormProperty, ReviewFormState} from "../../const";
import {connect} from "react-redux";

const withReviewForm = (Component) => {

  const WithReviewForm = (props) => {

    const [value, setValue] = useState(``);
    const [rating, setRating] = useState(0);
    const [isFormDisabled, setIsFormDisabled] = useState(false);

    const {authorizationStatus, reviewFormState} = props;

    useEffect(() => setFormState(reviewFormState), [reviewFormState]);

    const handleChangeRating = useCallback((evt) => {
      setRating(parseInt(evt.target.value, 10));
    });

    const handleChangeTextarea = useCallback((evt) => {
      const textareaValue = evt.target.value;
      if (textareaValue.length <= ReviewFormProperty.MAXLENGTH) {
        setValue(textareaValue);
      }
    });

    const handleSubmitForm = useCallback((evt) => {
      evt.preventDefault();
      const {cardId, onSubmit} = props;
      onSubmit(value, rating, cardId);
      setFormState(reviewFormState);
    });

    const setFormState = useCallback((evt) => {
      switch (evt) {
        case ReviewFormState.SENDING_ERROR:
          setIsFormDisabled(() => false);
          break;
        case ReviewFormState.DEFAULT:
          setValue(``);
          setRating(0);
          setIsFormDisabled(() => false);
          break;
        case ReviewFormState.POSTING_COMMENT:
          setIsFormDisabled(() => true);
      }
    });

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return null;
    }

    return (
      <Component
        rating={rating}
        value={value}
        isFormDisabled={isFormDisabled}
        authorizationStatus={authorizationStatus}
        onChangeRating={handleChangeRating}
        onChangeTextArea={handleChangeTextarea}
        onSubmit={handleSubmitForm}
        reviewFormState={reviewFormState}
      />
    );
  };

  WithReviewForm.propTypes = {
    authorizationStatus: PropTypes.string.isRequired,
    cardId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reviewFormState: PropTypes.string.isRequired
  };

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatusSelector(state),
    reviewFormState: getReviewFormStateSelector(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(comment, rating, hotelId) {
      dispatch(setReviewFormStateAction(ReviewFormState.POSTING_COMMENT));
      dispatch(postComment({comment, rating, hotelId}));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
