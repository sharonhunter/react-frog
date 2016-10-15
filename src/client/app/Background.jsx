import React from 'react';
import Quote from './Quote.jsx';
import QUOTES from './quotes.js';
import Frog from './Frog.jsx';

class Background extends React.Component {

  constructor(props) {
    super(props);
    this.callChangeQuote = this.callChangeQuote.bind(this);
  }

  // wrapper function - the refs mechanism does not work until after first render
  // this function will exist even before rendering
  // Quote component requires ref = 'quote' for this to work!
  callChangeQuote() {
    this.refs.quote.changeQuote();
  }

  render() {

  	var style = {
        backgroundColor: "yellow",
        height: "100%",
        width: "100%",
    };
    
    return (
      <div style={style}>
        <Quote ref='quote' />
        <Frog whenClicked={this.callChangeQuote} />
      </div>
    );
  }

}

export default Background;