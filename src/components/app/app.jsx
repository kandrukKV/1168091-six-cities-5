import React from "react";
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from "../../browser-history";
import Main from "../main/main";
import Login from "../login/login";
import withLoginForm from "../../hocs/with-login-form/with-login-form";
import PrivateRoute from "../private-route/private-route";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../page-not-found/page-not-found";
import {AppRoute} from "../../const";

const WrappedLogin = withLoginForm(Login);


const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <WrappedLogin/>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites/>}
        />

        <Route
          exact
          path='/offer/:id?'
          render={(props) => <Offer {...props}/>}
        />

        <Route>
          <PageNotFound/>
        </Route>

      </Switch>
    </Router>

  );
};

export default App;
