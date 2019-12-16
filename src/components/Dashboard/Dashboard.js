import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {this.props.reduxState.speed.length}</p>
        
        <p>PASSENGER COUNT: {this.props.reduxState.passengers.length}</p>

        <ul>PASSENGER LIST:</ul>
        {/* <li>{this.state.myName}</li> */}
        { this.props.reduxState.passengers.map( ( item, i )  => 
            <li key={ i }>{item}</li>) }

      </div>
    )
  }
}

const putReduxStateOnProps = ( reduxState ) => ({
  reduxState: reduxState
})

export default connect( putReduxStateOnProps ) (Dashboard);