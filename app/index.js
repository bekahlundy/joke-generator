import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
// import Articles from ./components/articles
// import {ToDoList} from './componeents/todolist'
// import Home



// render(<App />, document.querySelector('.application'));


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} >
    </Route>
  </Router>
  , document.querySelector('.application'));
