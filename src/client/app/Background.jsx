import React from 'react';
import Quote from './Quote.jsx';
import QUOTES from './quotes.js';

class Background extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
        backgroundColor: "yellow",
        height: "100%",
        width: "100%",
    }
    return (
      <div style={style}>
        <Quote />
      </div>
    );
  }

}

export default Background;