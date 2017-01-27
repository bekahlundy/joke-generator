import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Settings = (props) => {
    return (
      <div>
        <p>Set Name:</p>
        <Input
          className='set-name-input'
          placeholder='Set Name'
          onChange={props.setName.bind(props.state.name)}/>
          <Button
            className='set-btn'
            text='Set'
            onClick={() => props.clickSet(props.state.name)}/>
            <Button
              className='reset-btn'
              text='Reset'
              onClick={() => console.log('reset')}/>
              <p>Parental Controls</p>
              ON<Input
                name='parental'
                className='on-btn'
                type='radio'
                onChange={() => props.parentalControlOn()}/>
                OFF<Input
                  name='parental'
                  className='off-btn'
                  type='radio'
                  defaultChecked={true}
                  onChange={() => props.parentalControlOff()}/>
                </div>
              )

}

export default Settings;
