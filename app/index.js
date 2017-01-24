import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import './styles';
// import { Router, browserHistory, Route, IndexRoute } from 'react-router';
// import Articles from ./components/articles
// import {ToDoList} from './componeents/todolist'
// import Home

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

render(<App />, document.querySelector('.application'));

ReactDOM.render(
  <Router>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/articles' component={Articles} />
      <Route path='/todolist' component={ToDoList} />
    </Route>
  </Router>
  , document.querySelector('.application')
)

in app.js,
{this.props.children}
<Link to ='/articles'>Articles</Link>
