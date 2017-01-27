import React from 'react';
import Button from '../Button/Button'
import './jokecard-styles.css'
import { Link } from 'react-router';

const JokeCard = (props) => {
  return (

      <section>
        <p>{props.joke}</p>
        <Button
          className='favorite-button'
          onClick={() => props.pushToFavorites(props.joke)}/>
      </section>

  )
}

export default JokeCard;
