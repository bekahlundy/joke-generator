import React from 'react';
import Button from '../Button/Button'
import './jokecard-styles.scss'
import { Link } from 'react-router';

const JokeCard = (props) => {
  return (

      <section>
        <p>{props.joke}</p>
        <Button
          className='favorite-button'
          text='★'
          onClick={() => props.pushToFavorites(props.joke)}/>
      </section>

  )
}

export default JokeCard;
