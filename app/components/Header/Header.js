import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';

export default class Header extends React.Component{
  constructor() {
    super()
    this.state = {
      switchSetting: false
    }
  }
  render() {
    return(
      <div className="header">
        <h1>Chuck Norris Joke Machine</h1>
        <Link to={this.state.switchSetting ? '/home' : '/settings'}>
        <Button
          className='settings-btn'
          onClick={() => this.setState({switchSetting: this.state.switchSetting ? false : true})}
          text={this.state.switchSetting ? 'jokes' : 'setting'}/>
        </Link>
      </div>
    )
  }
}
