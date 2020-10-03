import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";


const App = (props) => {

  const {rentaOffersNumber} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Main rentaOffersNumber={rentaOffersNumber}/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <Route exact path='/favorites'>
          <Favorites/>
        </Route>

        <Route exact path='/offer/:id?'>
          <Offer/>
        </Route>

        <Route>
          <h1>Page not found</h1>
        </Route>

      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  rentaOffersNumber: PropTypes.number.isRequired,
};

export default App;
