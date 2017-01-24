import React from 'react';
import Button from '../Button/Button';

const Header = () => {
  return(
    <div className="header">
      <h1>Chuck Norris Joke Machine</h1>
      <Button
        className='settings-btn'
        onClick={() => console.log('cleek')}
        text='settings'/>
      </div>
  )
}

export default Header;
