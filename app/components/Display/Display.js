import React from 'react';
import Button from '../Button/Button';

const Display = () => {
  return(
    <div>
      <Button
        className='get-jokes-btn'
        onClick={() => console.log('get jokes')}
        text='Get Jokes'/>
      <Button
        className='favorites-btn'
        onClick={() => console.log('favorites')}
        text='Favorites'/>
    </div>
  )
}

export default Display;
