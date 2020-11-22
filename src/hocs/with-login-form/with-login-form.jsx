import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import {connect} from "react-redux";

const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    handleSubmit(evt) {
      const {onSubmit} = this.props;
      const {email, password} = this.state;
      evt.preventDefault();

      onSubmit({login: email, password});
    }

    render() {
      return (
        <Component
          email={this.state.email}
          password={this.state.password}
          onChangeEmail={this.handleChangeEmail}
          onChangePassword={this.handleChangePassword}
          onSubmitForm={this.handleSubmit}
        />
      );
    }
  }

  WithLoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(authData) {
      dispatch(login(authData));
    }
  });

  return connect(null, mapDispatchToProps)(WithLoginForm);
};

export default withLoginForm;
