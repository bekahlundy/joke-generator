import React from 'react';
import {Route, Router, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import App from '../App/App';
import JokeCard from '../JokeCard/JokeCard'
import JokeContainer from '../JokeContainer/JokeContainer';
import Settings from '../Settings/Settings';

const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={JokeContainer}>
          <Route path='/jokes' component={JokeCard}/>
        </Route>
        <Route path='/settings'
        component={Settings}/>
      </Route>
    </Router>
  );
}

export default Path;
