import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const FLIGHT_API_URL = 'http://localhost:3000/flights';
const OD_API_URL = 'http://localhost:3000/flights/origin/destination'

class SearchFlight extends Component {
  state = {
    toDestination: "",
    fromDestination: "",
    flightData: [],
    searchDate : '',
    origins: [],
    destinations: []
  };

  componentDidMount = () => {
    this.populateOptions();
  }

  populateOptions = () => {
    axios.get(OD_API_URL)
    .then(res => {
      this.setState({
        origins : res.data.origins,
        destinations : res.data.destinations
      })
    })
    .catch( error => {
      console.warn(error);
    })
  }


  handleSearch = (e) => {
    e.preventDefault();
    this.fetchFlights();
  };

  handleInput = (ev) => {
    this.setState({ searchDate: ev.target.value });
  };
  /*
    TODO:
  */
  handleSubmit = () => {
    console.log("Search submitted:", this.state.searchDate);
  };

  /*
        This method will render out every peice of information
        about the flights to the DOM it checks if the data has
        come in from the server once the front-end has recieved
        data from the server the method makes sure that its not the
        fail data if its all good to go through then it maps
        the flight data array which will be where it renders out
        to the DOM
    */
  renderFlightData = () => {
    let flightArr = [];
    if (this.state.flightData.length > 0) {
      console.log(this.state.flightData);
      if (this.state.flightData !== "No flight results") {
        flightArr = this.state.flightData.map((flight, index) => {
          console.log(flight);
          return (
            <div key={index}>
              <h6>Date:</h6>
              <p key={flight.id}>{flight.date}</p>
              <h6>Flight Number:</h6>
              <p key={flight.plane_id}>
                <Link to={`/search/${flight.plane_id}`}>{flight.flight_number}</Link>
              </p>
              <h6>Departing From:</h6>
              <p key={flight.origin}>{flight.origin}</p>
              <h6>Arrivng At:</h6>
              <p key={flight.destination}>{flight.destination}</p>
            </div>
          );
        });
        return flightArr;
      }else{
        return this.state.flightData
      }
    }

    
  };
  formatDate = date => {
    return date.split("-").reverse().join("-");
  }
  /*
        This method returns flight data from the back end
        once the response comes in from the server it checks
        if there is results if the no_result field returns true from the
        server the flight data state gets set to the fail_text from the server
        else the flight data gets set to the response JSON if the data comes in from
        the server as a pure JSON object then I turn it into an array in the else
        statement.
    */
  fetchFlights = () => {
    axios
      .get(
        FLIGHT_API_URL +
          "/" +
          this.state.toDestination +
          "/" +
          this.state.fromDestination +
          "/" +
          this.state.searchDate
      )
      .then((response) => {
        if (response.data.no_result) {
          this.setState({ flightData: response.data.fail_text });
        } else {
          if (Array.isArray(response.data.flight_data)) {
            this.setState({
              flightData: response.data.flight_data,
            });
           
          } else {
            this.setState({
              flightData: [response.data.flight_data],
            });
          }
        }
        console.log(response);
      })
      .catch((error) => console.warn(error));
  };
  /*
        onChange handler is passed a method that directly sets the state
        rather then creating a method like "handleInput" I just call that
        behaviour to happen inside the onChange propertie
    */
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
            <select onChange={(e) => this.setState({ toDestination: e.target.value })}>
                <option value>From</option>
                {this.state.origins.map((origin) => (
                <option key={origin}>{origin}</option>
                ))}
          </select>
          <select onChange={(e) => this.setState({ fromDestination: e.target.value })}>         
            <option value>To</option>
            {this.state.destinations.map((destination) => (
              <option key={destination}>{destination}</option>
            ))}
          </select>
          <p>Depature Date:</p>
          <input type="date" onChange={this.handleInput} />
          <button onClick={this.handleSubmit}>Search</button>
          {this.renderFlightData()}
        </form>
      </div>
    );
  }
}

export default SearchFlight;
