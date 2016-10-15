import React from 'react';

class EyeBlack extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var style = {
        backgroundColor: "#000",
        height: "12px",
        width: "12px",
        borderRadius: "50%",
        position: "relative",
        top: "18px",
        margin: "0 auto"
    };
    
    return (
      <div style={style}></div>
    );
  }

}

export default EyeBlack;