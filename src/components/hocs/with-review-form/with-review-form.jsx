import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../../store/selectors";
import {AuthorizationStatus} from "../../../const";
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
    }

    handleChangeRating(evt) {
      const starValue = evt.target.value;
      this.setState(() => ({rating: parseInt(starValue, 10)}));
    }

    handleChangeTextarea(evt) {
      const textareaValue = evt.target.value;
      this.setState(() => ({value: textareaValue}));
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
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state)
  });

  WithReviewForm.propTypes = {
    authorizationStatus: PropTypes.string.isRequired
  };

  return connect(mapStateToProps)(WithReviewForm);
};

export default withReviewForm;
