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
    var quote_style = {
        width: "65%",
        margin: "0px auto", 
        textAlign: "center"
    }

    var author_style = {
        width: "65%",
        margin: "0px auto",
        textAlign: "center"
    }

    return (
      <div>
        <div style={quote_style} dangerouslySetInnerHTML = {{__html: this.state.text}} />
        <div style={author_style} dangerouslySetInnerHTML = {{__html:this.state.author}} />
      </div>
    );
  }

}

export default Quote;