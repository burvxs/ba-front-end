import React, { Component } from 'react';
import axios from 'axios'

class SearchFlight extends Component {
    state = {
        query : ''
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
                    <input type="text" onChange={e => this.setState({query : e.target.value})}/>
                </form>
            </div>
        );
    }
}

export default SearchFlight;
