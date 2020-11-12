import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatusSelector} from "../../../store/selectors";
import {postComment} from "../../../store/api-actions";
import {AuthorizationStatus, ReviewFormProperty} from "../../../const";
import {connect} from "react-redux";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor() {
      super();
      this.state = {
        value: ``,
        rating: 0,
        isSubmit: false,
      };
      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
      this.handleSubmitForm = this.handleSubmitForm.bind(this);
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
      const {cardId, onSubmit} = this.props;
      onSubmit(value, rating, cardId);
      this.setState({
        value: ``,
        rating: 0,
      });
    }

    render() {
      const {rating, value, isSubmit} = this.state;

      const {authorizationStatus} = this.props;

      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return null;
      }

      return (
        <Component
          rating={rating}
          value={value}
          isSubmit={isSubmit}
          authorizationStatus={authorizationStatus}
          onChangeRating={this.handleChangeRating}
          onChangeTextArea={this.handleChangeTextarea}
          onSubmit={this.handleSubmitForm}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatusSelector(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(comment, rating, hotelId) {
      dispatch(postComment({comment, rating, hotelId}));
    }
  });

  WithReviewForm.propTypes = {
    authorizationStatus: PropTypes.string.isRequired,
    cardId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
