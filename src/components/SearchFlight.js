import React, { Component } from 'react';
import axios from 'axios'

class SearchFlight extends Component {
    state = {
        toDestination : '',
        fromDestination : ''
    }
    handleSearch = (e) => {
        e.preventDefault();

    }
    fetchFlights = () => {


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
