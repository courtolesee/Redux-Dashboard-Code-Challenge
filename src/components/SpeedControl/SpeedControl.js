import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  state = {
    currentSpeed: 0
  }

  handleIncrease = (event) => {
    let speed = this.state.currentSpeed
    speed++
    console.log('speed increasing:', speed);
    this.setState(
      {currentSpeed: speed} 
    )
  }

  handleDecrease = (event) => {
    let speed = this.state.currentSpeed
    speed--
    console.log('speed decreasing:', speed);
    this.setState(
      {currentSpeed: speed} 
    )
  }


  render() {
    return (
      <div>
        <h2>Speed Control</h2>
        <button onClick={ this.handleIncrease }>Increase Speed</button>
        <p>SPEED: {this.state.currentSpeed}</p>
        <button onClick={ this.handleDecrease }>Decrease Speed</button>
      </div>
    )
  }
}

const putReduxStateOnProps = ( reduxState ) => ({
  // reduxState: reduxState. <-- add reducer here
})

export default connect( putReduxStateOnProps ) (SpeedControl);