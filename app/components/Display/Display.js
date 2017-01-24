import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Joke from '../Joke/Joke';

export default class Display extends React.Component {

  getJokes() {
    console.log('joke')
  }

  render() {
    return(
      <div>
        <Joke />
        <Button
          className='get-jokes-btn'
          onClick={this.getJokes.bind(this)}
          text='Get Jokes'/>
        <Button
          className='favorites-btn'
          onClick={() => console.log('favorites')}
          text='Favorites'/>
        <Input
          className='input'
          onChange={() => console.log('change')}
          placeholder='Enter'/>
      </div>
    )
  }
}
