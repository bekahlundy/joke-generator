import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class JokeContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      joke: '',
      jokes: [],
      num: 0
    }
  }
  // componentDidMount() {
  //   fetch('http://api.icndb.com/jokes/random/')
  //     .then((data) => data.json())
  //     .then((scrub) => this.APIScrubber(scrub.value.joke))
  //     .then((joke) => this.setState({ joke: joke }))
  // }

   getJokes() {
     fetch(`http://api.icndb.com/jokes/random/${this.state.num}?escape=javascript`)
        .then((response) => response.json())
        .then((data) => data.value.map(obj => obj.joke))
        .then(array => this.setState({ jokes: array })
        )
        console.log(this.state.num)
      }

  //  APIScrubber(api){
  //    let scrubbed = api.replace(/&quot;/g, '"');
  //    return scrubbed;
  //  }
   handleChange(e) {
     this.setState({ num: e.target.value })
   }


    render() {
      let welcome = (<div>Click to get jokes!</div>)
      let display = this.state.num === 0 ? welcome : this.state.jokes.map(joke => console.log(joke))
      // let jokes = this.state.num ===  0 ? welcome : this.state.jokes.map(joke => console.log(joke))
      return(
        <div>
          <div>{display}</div>
          <h1>{this.state.joke}</h1>|
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
          <h1>{this.state.jokes}</h1>
        </div>
      )
  }
}
