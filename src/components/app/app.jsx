import React from "react";
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from "../../browser-history";
import Main from "../main/main";
import Login from "../login/login";
import PrivateRoute from "../private-route/private-route";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../page-not-found/page-not-found";
import {AppRoute} from "../../const";


const App = () => {

  const favoriteCards = [];
  return (
    <Router history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.ROOT}>
          <Main/>
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <Favorites favoriteCards={favoriteCards}/>
            );
          }}
        />

        <Route
          exact
          path='/offer/:id?'
          render={() => <Offer card={{}} reviews={[]} nearPlaces={[{}, {}, {}]}/>}
        />

        <Route>
          <PageNotFound/>
        </Route>

      </Switch>
    </Router>

  );
};

export default App;
