import React from 'react';
import {render} from 'react-dom';
import Quote from './Quote.jsx';
import QUOTES from './quotes.js';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<Quote />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));