import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";


const App = (props) => {

  const {cards, reviews} = props;
  const favoriteCards = cards.filter((card) => card.isFavorite === true);
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
          render={() => <Offer card={cards[0]} reviews={reviews} nearPlaces={[cards[0], cards[2], cards[3]]}/>}
        />

        <Route>
          <h1>Page not found</h1>
        </Route>

      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  rentaOffersNumber: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string
    })),
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    additions: PropTypes.array.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }),
    description: PropTypes.string.isRequired
  })),
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }))
};

export default App;
