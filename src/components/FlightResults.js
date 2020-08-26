import React, { Component } from 'react';
import Grid from './Grid'

class FlightResults extends Component {
    getParams = () => {
        const {match : {params}} = this.props
        return params
    }
    render() {
        return (
            <div>
                <Grid flightId={this.getParams().id}/>
            </div>
        );
    }
}

export default FlightResults;
