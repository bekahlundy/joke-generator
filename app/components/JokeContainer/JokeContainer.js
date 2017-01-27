import React from 'react';
import Button from '../Button/Button';
import SingleJoke from '../SingleJoke/SingleJoke';
import Input from '../Input/Input';
import JokeCard from '../JokeCard/JokeCard';
import { Link } from 'react-router';
import './joke-container-style.scss';

const JokeContainer = (props) => {
  console.log(props);

    let welcome = (<div>Click to get jokes!</div>)
    let display = props.state.num === 0 ? welcome : props.state.jokes.map((joke) => <JokeCard joke = {joke}
              pushToFavorites={props.pushToFavorites}/>)
    return(
      <div className='centerme'>
        <h1>{props.state.joke}</h1>|
        <div className='center'>
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
            <Link to={'/favorites'}>
          <Button
            className='favorites-btn'
            onClick={() => console.log('favorites')}
            text='Favorites'/>
          </Link>
        </div>
          <div>{display}</div>
      </div>
  )
}

export default JokeContainer;
