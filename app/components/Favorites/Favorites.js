// import './favorites-style';
import React from 'react';
import Button from '../Button/Button';
import JokeCard from '../JokeCard/JokeCard';

const Favorites = (props) => {
  console.log(props.state.favorites)
  let display =props.state.favorites.map((joke) => <JokeCard joke = {joke}
    pushToFavorites={props.pushToFavorites}/>)
  return(
    <div>
      <p>{display}</p>
    </div>
  )
}


export default Favorites;
