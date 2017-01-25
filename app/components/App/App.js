import React from 'react';
import './app-style';
// import { Link } from 'react-router';
import Header from '../Header/Header';
import JokeContainer from '../JokeContainer/JokeContainer';

const App = () => {
  return (
    <div>
    <Header />
    <JokeContainer />
    </div>
  );

}

export default App;
