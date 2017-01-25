import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class JokeContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      joke: '',
      num: 0
    }
  }
  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random')
      .then((data) => data.json())
      .then((scrub) => this.APIScrubber(scrub.value.joke))
      .then((joke) => this.setState({ joke: joke }))
  }

  APIScrubber(api){
   let scrubbed = api.replace(/&quot;/g, '"');
   return scrubbed;
 }

   getJokes() {
     console.log('joke')
   }

   handleChange(e) {
     this.setState({ num: e.target.value })
   }


    render() {
      return(
        <div>
          <h1>{this.state.joke}</h1>
          <Button
            className='get-jokes-btn'
            onClick={this.getJokes.bind(this)}
            text='Get Jokes'/>
          <Input
            className='input'
            onChange={this.handleChange.bind(this)}
            placeholder='Enter'
            type='number'/>
          <Button
            className='favorites-btn'
            onClick={() => console.log('favorites')}
            text='Favorites'/>
        </div>
      )
  }
}
