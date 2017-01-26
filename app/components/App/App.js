import React from 'react';
import './app-style';
// import { Link } from 'react-router';
import Header from '../Header/Header';
import JokeContainer from '../JokeContainer/JokeContainer';
import SingleJoke from '../SingleJoke/SingleJoke';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      }
  }
  
  //   fetchJokes() {
  //     fetch(`http://api.icndb.com/jokes/random/${this.state.num}?escape=javascript`)
  //        .then((response) => response.json())
  //        .then((data) => data.value.map(obj => obj.joke))
  //        .then(array => this.setState({ jokes: array })
  //        )
  //        console.log(this.state.num)
  //   }
  render() {
    // const Children = React.cloneElement(this.props.children, {
    //   getJokes: this.fetchJokes.bind(this),
    // })
    return (
      <div>
        <Header />
        <SingleJoke />
        {/* <JokeContainer /> */}
        {this.props.children}
      </div>
    );

  }
}
