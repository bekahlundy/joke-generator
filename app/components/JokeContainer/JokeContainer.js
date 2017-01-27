import React from 'react';
import Button from '../Button/Button';
import SingleJoke from '../SingleJoke/SingleJoke';
import Input from '../Input/Input';
import JokeCard from '../JokeCard/JokeCard';
import { Link } from 'react-router';

const JokeContainer = (props) => {
  console.log(props);
    let welcome = (<div>Click to get jokes!</div>)
    let display = props.state.num === 0 ? welcome : props.state.jokes.map((joke) => <JokeCard joke = {joke}/>)
    return(
      <div>
        <h1>{props.state.joke}</h1>|
        <Link to={'/jokes'}>
        <Button
          className='get-jokes-btn'
          onClick={() => props.getJokes(props.state.num)}
          text='Get Jokes'/>
        </Link>
        <Input
          className='input'
          onChange={(e) => props.num(e)}
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

export default JokeContainer;


  //  getJokes() {
  //    fetch(`http://api.icndb.com/jokes/random/${props.state.num}?escape=javascript`)
  //       .then((response) => response.json())
  //       .then((data) => data.value.map(obj => obj.joke))
  //       .then(array => props.setState({ jokes: array })
  //       )
  //       console.log(props.state.num)
  //     }

  //  num(e) {
  //    props.setState({ num: e.target.value })
  //  }
