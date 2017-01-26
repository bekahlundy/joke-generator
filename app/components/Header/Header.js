import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';

const Header = () => {
  return(
    <div className="header">
      <h1>Chuck Norris Joke Machine</h1>
      <Link to={'/settings'}>
        <Button
        className='settings-btn'
        onClick={() => console.log('cleek')}
        text='settings'/>
      </Link>
      </div>
  )
}

export default Header;
