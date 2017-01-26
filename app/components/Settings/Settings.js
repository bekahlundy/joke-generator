import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
export default class Settings extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      firstName: '',
      lastName: ''
    }
  }
  setName(e) {
    this.setState({ name: e.target.value })
  }
  clickSet() {
    let name = this.state.name
    this.setState({ firstName: name.split(" ")[0] })
    this.setState({ lastName: name.split(" ")[1] })
  }
  render() {
    return (
      <div>
        <p>Set Name:</p>
        <Input
          className='set-name-input'
          placeholder='Set Name'
          onChange={this.setName.bind(this)}/>
          <Button
            className='set-btn'
            text='Set'
            onClick={this.clickSet.bind(this)}/>
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
                  defaultChecked={true}
                  onChange={() => console.log('off')}/>
                </div>
              )
  }
}
