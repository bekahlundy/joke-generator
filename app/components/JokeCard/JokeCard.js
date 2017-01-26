import React from 'react';
import Button from '../Button/Button'
import './jokecard-styles.css'

const JokeCard = ({joke}) => {
  return (

      <section>
        <p>{joke}</p>
        <Button
          className='favorite-button'
          onClick={() => console.log('fav')}/>
      </section>

  )
}

export default JokeCard;
