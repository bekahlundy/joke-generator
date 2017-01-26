import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
const Settings = () => {
  return (
    <div>
      <p>Set Name:</p>
      <Input
        className='set-name-input'
        placeholder='Set Name'
        onChange={() => console.log('tip')}/>
      <Button
        className='set-btn'
        text='Set'
        onClick={() => console.log('set')}/>
      <Button
        className='reset-btn'
        text='Reset'
        onClick={() => console.log('reset')}/>
      <p>Parental Controls</p>
      ON<Input
        name='parental'
        className='on-btn'
        type='radio'
        onChange={() => console.log('on')}/>
        OFF<Input
          name='parental'
          className='off-btn'
          type='radio'
          onChange={() => console.log('off')}/>
    </div>
  )
}

export default Settings;
