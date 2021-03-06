import React from 'react';
import EyeContainer from './EyeContainer.jsx';

class Frog extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
        backgroundColor: "#83F52C",
        height: "200px",
        width: "200px",
        margin: "0px auto"
    };
    
    return (
      <div style={style} onClick={this.props.whenClicked}>Frog
        <EyeContainer />
      </div>
    );
  }

}

export default Frog;