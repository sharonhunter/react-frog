import React from 'react';
import QUOTES from './quotes.js';
import Frog from './Frog.jsx';

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
        //height: "125px",
        width: "65%",
        margin: "0px auto", 
        textAlign: "center"
    }

    var author_style = {
        //height: "25px",
        width: "65%",
        margin: "0px auto",
        textAlign: "center"
    }

    var author_style = {
        //height: "25px",
        width: "65%",
        margin: "0px auto",
        textAlign: "center"
    }

    return (
      <div style={outer_div_style}>
        <div style={quote_style} dangerouslySetInnerHTML = {{__html: this.state.text}} />
        <div style={author_style} dangerouslySetInnerHTML = {{__html:this.state.author}} />
        <Frog whenClicked={this.changeQuote} />
      </div>
    );
  }

}

export default Quote;