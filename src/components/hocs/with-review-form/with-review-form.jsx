import React, {PureComponent} from "react";

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
      return (
        <Component
          rating={rating}
          value={value}
          isSubmit={isSubmit}
          onChangeRating={this.handleChangeRating}
          onChangeTextArea={this.handleChangeTextarea}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
