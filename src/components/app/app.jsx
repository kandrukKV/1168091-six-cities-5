import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../page-not-found/page-not-found";


const App = () => {

  const favoriteCards = [];
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Main/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/favorites'>
          <Favorites favoriteCards={favoriteCards}/>
        </Route>

        <Route
          exact
          path='/offer/:id?'
          render={() => <Offer card={{}} reviews={[]} nearPlaces={[{}, {}, {}]}/>}
        />

        <Route>
          <PageNotFound/>
        </Route>

      </Switch>
    </BrowserRouter>

  );
};

export default App;
