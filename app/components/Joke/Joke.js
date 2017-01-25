import React from 'react';

export default class Joke extends React.Component{
  constructor() {
    super()
    this.state = {
      joke: ''
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


    render() {
      return(
        <div>
          <h1>{this.state.joke}</h1>
        </div>
      )
  }
}
