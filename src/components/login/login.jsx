import React from "react";
import {NavLink} from "react-router-dom";
import {AppRoute} from "../../const";
import PropTypes from "prop-types";
import Header from "../header/header";

const Login = (props) => {

  const {onSubmitForm, onChangeEmail, onChangePassword, email, password} = props;

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={onSubmitForm}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={onChangeEmail}
                  value={email}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  onChange={onChangePassword}
                  value={password}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <NavLink className="locations__item-link" to={AppRoute.ROOT}>
                <span>Amsterdam</span>
              </NavLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
