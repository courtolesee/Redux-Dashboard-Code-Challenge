import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  state = {
    name: '',
  }

  handleChange = ( event ) => {
    this.setState({
        name: event.target.value
        })
    }

  submitForm = (event) => {
    event.preventDefault();
    console.log('you added:', this.state.name);
    // clear inputs
    this.setState({
        name: '',
    })
    this.props.dispatch( { type: 'ADD_PASSENGER', payload: this.state.name } );
  }


  render() {
    return (
      <div>
        <h2>Passengers</h2>
        {/* {JSON.stringify(this.props.reduxState.passengers)} */}
        <form onSubmit= { this.submitForm }>
          <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange} value={ this.state.name }/>
          <button>Add Passenger</button>
        </form>
        <ul>PASSENGER LIST:</ul>
        { this.props.reduxState.passengers.map( ( item, i )  => 
            <li key={ i }>{item}</li>) }

      </div>
    )
  }
}

const putReduxStateOnProps = ( reduxState ) => ({
  reduxState: reduxState
})

export default connect( putReduxStateOnProps ) (Passengers);