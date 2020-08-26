import React, { Component } from 'react';
import Grid from './Grid'
import ReservationsForm from './ReservationsForm'

/*
    This component will render the grid and reservation form components
    once the route changes. This component is a handler to render out
    child components once the user triggers a route change. It will pass
    down property data to children.
*/
class FlightHandler extends Component {
    getParams = () => {
        const {match : {params}} = this.props
        return params
    }
    render() {
        return (
            <div>
                <ReservationsForm/>
                <Grid flightId={this.getParams().id}/>
            </div>
        );
    }
}

export default FlightHandler;
