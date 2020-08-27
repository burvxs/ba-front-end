import React, { Component } from 'react';
import axios from 'axios';

import Grid from './Grid'

const SEAT_DATA_POST_URL = "http://localhost:3000/planes"
/*
    This component will render the grid and reservation form components
    once the route changes. This component is a handler to render out
    child components once the user triggers a route change. It will pass
    down property data to children.
*/
class FlightHandler extends Component {
    state = {
        seatData : [],
        seatIndex : 0,
        responseSeats : []
    }
    setFlightData = (seats, seatIndex) => {
        this.setState({
            seatData : seats,
            seatIndex : seatIndex
        })
        console.log(this.state.seatData);
        axios.post(SEAT_DATA_POST_URL.concat(`/${this.getParams().id}/seats`), {
            seat : this.state.seatData[this.state.seatIndex],
            index : this.state.seatIndex
        })
        .then(res => {
            this.setState({
                responseSeats : res.data.seat_data
            })
        })
        .catch(error => console.log(error))
    }
    getParams = () => {
        const {match : {params}} = this.props
        return params
    }
    render() {
        return (
            <div>
                <Grid flightId={this.getParams().id} onDataHandle={this.setFlightData} responseSeats={this.state.responseSeats}/>
            </div>
        );
    }
}

export default FlightHandler;
