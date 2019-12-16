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
        
        <p>SPEED: GOES HERE</p>
        <p>PASSENGER COUNT: GOES HERE</p>
      </div>
    )
  }
}

const putReduxStateOnProps = ( reduxState ) => ({
  // reduxState: reduxState.gatherSurveyInfo <-- add reducer here
})

export default connect( putReduxStateOnProps ) (Dashboard);