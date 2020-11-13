import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatusSelector, getReviewFormStateSelector} from "../../store/selectors";
import {postComment} from "../../store/api-actions";
import {setReviewFormStateAction} from "../../store/action";
import {AuthorizationStatus, ReviewFormProperty, ReviewFormState} from "../../const";
import {connect} from "react-redux";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor() {
      super();
      this.state = {
        value: ``,
        rating: 0,
        isFormDisabled: false
      };
      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    componentDidUpdate() {
      const {reviewFormState} = this.props;
      this.setFormState(reviewFormState);
    }

    handleChangeRating(evt) {
      const starValue = evt.target.value;
      this.setState(() => ({rating: parseInt(starValue, 10)}));
    }

    handleChangeTextarea(evt) {
      const textareaValue = evt.target.value;
      if (textareaValue.length <= ReviewFormProperty.MAXLENGTH) {
        this.setState(() => ({value: textareaValue}));
      }
    }

    handleSubmitForm(evt) {
      evt.preventDefault();
      const {rating, value} = this.state;
      const {cardId, onSubmit, reviewFormState} = this.props;
      onSubmit(value, rating, cardId);
      this.setFormState(reviewFormState);
    }

    setFormState(event) {
      switch (event) {
        case ReviewFormState.SENDING_ERROR:
          this.setState(() => ({
            isFormDisabled: false
          }));
          break;
        case ReviewFormState.DEFAULT:
          this.setState(() => ({
            value: ``,
            rating: 0,
            isFormDisabled: false
          }));
          break;
        case ReviewFormState.POSTING_COMMENT:
          this.setState(() => ({
            isFormDisabled: true
          }));
      }
    }

    render() {

      const {rating, value, isFormDisabled} = this.state;

      const {authorizationStatus, reviewFormState} = this.props;

      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return null;
      }

      return (
        <Component
          rating={rating}
          value={value}
          isFormDisabled={isFormDisabled}
          authorizationStatus={authorizationStatus}
          onChangeRating={this.handleChangeRating}
          onChangeTextArea={this.handleChangeTextarea}
          onSubmit={this.handleSubmitForm}
          reviewFormState={reviewFormState}
          changeRating={this.handleChangeRating2}
        />
      );
    }
  }

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

  WithReviewForm.propTypes = {
    authorizationStatus: PropTypes.string.isRequired,
    cardId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    reviewFormState: PropTypes.string.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
