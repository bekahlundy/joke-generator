import React from 'react';
import Button from '../Button/Button';
import SingleJoke from '../SingleJoke/SingleJoke';
import Input from '../Input/Input';
import JokeCard from '../JokeCard/JokeCard';
import { Link } from 'react-router';

export default class JokeContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      jokes: [],
      num: 0
    }
  }

   getJokes() {
     fetch(`http://api.icndb.com/jokes/random/${this.state.num}?escape=javascript`)
        .then((response) => response.json())
        .then((data) => data.value.map(obj => obj.joke))
        .then(array => this.setState({ jokes: array })
        )
        console.log(this.state.num)
      }

   handleChange(e) {
     this.setState({ num: e.target.value })
   }

    render() {
      let welcome = (<div>Click to get jokes!</div>)
      let display = this.state.num === 0 ? welcome : this.state.jokes.map((joke) => <JokeCard joke = {joke}/>)
      return(
        <div>
          <h1>{this.state.joke}</h1>|
          <Link to={'/jokes'}>
          <Button
            className='get-jokes-btn'
            onClick={this.getJokes.bind(this)}
            text='Get Jokes'/>
          </Link>
          <Input
            className='input'
            onChange={this.handleChange.bind(this)}
            placeholder='Enter'
            type='number'/>
          <Button
            className='favorites-btn'
            onClick={() => console.log('favorites')}
            text='Favorites'/>
            <div>{display}</div>
        </div>
      )
  }
}
