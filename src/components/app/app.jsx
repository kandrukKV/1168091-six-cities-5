import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";
import PageNotFound from "../page-not-found/page-not-found";


const App = (props) => {

  const {reviews} = props;
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
          render={() => <Offer card={{}} reviews={reviews} nearPlaces={[{}, {}, {}]}/>}
        />

        <Route>
          <PageNotFound/>
        </Route>

      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  reviews: PropTypes.array
};

export default App;
