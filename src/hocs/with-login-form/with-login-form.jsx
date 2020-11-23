import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import {connect} from "react-redux";

const withLoginForm = (Component) => {
  const WithLoginForm = (props) => {

    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const handleChangeEmail = useCallback((evt) => {
      setEmail(evt.target.value);
    });

    const handleChangePassword = useCallback((evt) => {
      setPassword(evt.target.value);
    });

    const handleSubmit = useCallback((evt) => {
      const {onSubmit} = props;

      evt.preventDefault();

      onSubmit({login: email, password});
    });

    return (
      <Component
        email={email}
        password={password}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onSubmitForm={handleSubmit}
      />
    );

  };

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
