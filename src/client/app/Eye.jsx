import React from 'react';
import EyeBlack from './EyeBlack.jsx';

class Eye extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
        backgroundColor: "#fff",
        height: "30px",
        width: "30px",
        display: "inline-block",
        borderRadius: "50%",
        // position: "relative"
    };

    return (
      <div style={style}>
        <EyeBlack />
      </div>
    );
  }

}

export default Eye;