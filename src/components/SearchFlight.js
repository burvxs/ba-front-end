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
    renderFlightData = () => {
        let flightArr = []
        if(this.state.flightData.length > 0){
            console.log(this.state.flightData);
            if (this.state.flightData != "No results found"){
                flightArr = this.state.flightData.map((f) => {
                    return (
                      <div>
                        <h6>Dates:</h6>
                        <ul>
                          <li key={f.id}>{f.date}</li>
                        </ul>
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
      axios.get(FLIGHT_API_URL + '/' + this.state.toDestination + '/' + this.state.fromDestination)
      .then( response => console.log('Works!', response.data) )
      .catch( error => console.warn('Error', error ));
    } // fetchFlights()
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
