import React, { Component } from 'react';
import axios from 'axios'

const FLIGHT_API_URL = 'http://localhost:3000/flights';

class SearchFlight extends Component {
    state = {
        toDestination : '',
        fromDestination : '',
        flightData : []
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.fetchFlights();

    }
    fetchFlights = () => {
      axios.get(FLIGHT_API_URL + '/' + this.state.toDestination + '/' + this.state.fromDestination)
      .then( response => console.log('Works!', response.data) )
      .catch( error => console.warn('Yes', error ));
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
            </form>
          </div>
        );
    }
}

export default SearchFlight;
