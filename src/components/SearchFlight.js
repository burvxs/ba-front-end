import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const FLIGHT_API_URL = 'http://localhost:3000/flights';

class SearchFlight extends Component {
    state = {
        toDestination : '',
        fromDestination : '',
        flightData : [],
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.fetchFlights();
    }
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
        let flightArr = []
        if(this.state.flightData.length > 0){
            console.log(this.state.flightData);
            if (this.state.flightData !== "No results found"){
                flightArr = this.state.flightData.map((f) => {
                    console.log(f);
                    return (
                      <div key={f.id}>
                        <h6>Date:</h6>
                          <p key={f.id}>{f.date}</p>
                        <h6>Flight Number:</h6>
                          <p key={f.id}><Link to={`/search/${f.id}`}>{f.flight_number}</Link></p>
                        <h6>Departing From:</h6>
                          <p key={f.id}>{f.origin}</p>
                        <h6>Arrivng At:</h6>
                          <p key={f.id}>{f.destination}</p>
                      </div>
                    );
                });
            }
        }

        return flightArr
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
        axios.get(FLIGHT_API_URL + "/" + this.state.toDestination + "/" + this.state.fromDestination)
        .then(response => {
            if (response.data.no_result){
                this.setState({ flightData: response.data.fail_text });
            }else{
                  if (Array.isArray(response.data.flight_data)) {
                  this.setState({
                    flightData: response.data.flight_data
                  });
                } else {
                  this.setState({
                    flightData: [response.data.flight_data]
                  });
                }
            }
        })
        .catch(error => console.warn(error))
    }
    /*
        onChange handler is passed a method that directly sets the state
        rather then creating a method like "handleInput" I just call that
        behaviour to happen inside the onChange propertie
    */
    render() {
        return (
          <div>
            <form onSubmit={this.handleSearch}>
              <input
                type="text"
                onChange={(e) =>
                  this.setState({ toDestination: e.target.value })
                }
              />
              <input
                type="text"
                onChange={(e) =>
                  this.setState({ fromDestination : e.target.value })
                }
              />
              <button>
                  Search
              </button>
              {this.renderFlightData()}
            </form>
          </div>
        );
    }
}

export default SearchFlight;
