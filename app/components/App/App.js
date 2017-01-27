import React from 'react';
import './app-style';
// import { Link } from 'react-router';
import Header from '../Header/Header';
import JokeContainer from '../JokeContainer/JokeContainer';
import SingleJoke from '../SingleJoke/SingleJoke';
import Settings from '../Settings/Settings';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      firstName: 'Chuck',
      lastName: 'Norris',
      num: 0,
      parentalControl: false,
      name: '',
      favorites: []
    }
  }

  clickSet(name) {
    this.setState({ firstName: name.split(" ")[0] })
    this.setState({ lastName: name.split(" ")[1] })
  }

  getJokes(num) {
    let parentalControl = this.state.parentalControl ? '&exclude=[explicit]' : ''
    fetch(`http://api.icndb.com/jokes/random/${this.state.num}?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}parentalControl`)
       .then((response) => response.json())
       .then((data) => data.value.map(obj => obj.joke))
       .then(array => this.setState({ jokes: array })
       )
       console.log(this.state.num)
     }

     num(e) {
       this.setState({ num: e.target.value })
     }

     parentalControlOn() {
       this.setState({ parentalControl: true })
     }

     parentalControlOff() {
       this.setState({ parentalControl: false })
     }

     setName(e) {
       this.setState({ name: e.target.value})
     }

     pushToFavorites(joke) {
       let updatedArray = this.state.favorites.slice()
       updatedArray.push(joke)
       this.setState({ favorites: updatedArray })
     }

     childCheck(){
        return(
          React.cloneElement(this.props.children, {
            clickSet: this.clickSet.bind(this),
            getJokes: this.getJokes.bind(this),
            num: this.num.bind(this),
            setName: this.setName.bind(this),
            parentalControlOn: this.parentalControlOn.bind(this),
            parentalControlOff: this.parentalControlOff.bind(this),
            pushToFavorites: this.pushToFavorites.bind(this),
            state: this.state
          })
        )
     }

  render() {
    return (
      <div>
        <Header />
        <SingleJoke />
        {this.childCheck()}
      </div>
    );

  }
}
