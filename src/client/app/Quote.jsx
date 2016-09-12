import React from 'react';
import QUOTES from './quotes.js';

class Quote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text : "",
      author: ""
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote () {
    const newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    this.setState(newQuote);
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML = {{__html: this.state.text}} />
        <div dangerouslySetInnerHTML = {{__html:this.state.author}} />
        <div><button onClick={this.changeQuote}>New Quote</button></div>
      </div>
    );
  }

}

export default Quote;