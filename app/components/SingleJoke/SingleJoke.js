import React from 'react';
import './singlejoke-style';

export default class SingleJoke extends React.Component {
  constructor() {
    super()
    this.state = {
      singleJoke: ''
    }
  }
  componentDidMount(){
    fetch('http://api.icndb.com/jokes/random')
      .then((stuff) => stuff.json())
      .then((moreStuff) => this.APIScrubber(moreStuff.value.joke))
      .then((moreMoreStuff) => this.setState({singleJoke: moreMoreStuff}));
  }

  APIScrubber(api){
    let scrubbed = api.replace(/&quot;/g, '"');
    return scrubbed;
  }
  render() {
    return(
      <div>
        <p className='single-joke'>{this.state.singleJoke}</p>
      </div>
    )
  }
}
