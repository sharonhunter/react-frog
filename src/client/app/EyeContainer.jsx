import React from 'react';
import Eye from './Eye.jsx';

class EyeContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
        border: "2px solid black",
        height: "30px",
        width: "80px",
        margin: "0px auto"
    };

    var leftEye = {
    	float: "left"
    };

    var rightEye = {
    	float: "right"
    };

    return (
      <div style={style}>
      	<div style={leftEye}>
      		<Eye />
	    </div>
	    <div style={rightEye}>
	      	<Eye />
	    </div>
      </div>
    );
  }

}

export default EyeContainer;
