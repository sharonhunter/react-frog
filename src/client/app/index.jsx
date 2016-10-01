import React from 'react';
import {render} from 'react-dom';
import Background from './Background.jsx';


class App extends React.Component {
  render () {
    return (
      <Background />
    );
  }
}

render(<App/>, document.getElementById('app'));