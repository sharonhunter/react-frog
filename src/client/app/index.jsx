import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import QUOTES from './quotes.js';

class App extends React.Component {
  render () {
    return (
    	<div>
    		<p> Hello People!</p>
    		<AwesomeComponent />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));