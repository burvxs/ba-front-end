import React, { Component } from 'react';
import axios from 'axios'

class ReservationsForm extends Component {

  handleInput = (ev) => {
    this.setState ({})
  }


  render(){
    return (
      <div>
        <h2>Select Travel Dates:</h2>
        <input type="date" onChange={ this.handleInput }/>
        <button onClick= { this.handleSubmit }>Search</button>
      </div>
    );
  }

} // class ReservationsForm

- class
- handle input for date
- handle submit - axios post
- render input  - get origin and destination

export default ReservationsForm;
