import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';

const GET_SEATS_URL = 'http://localhost:3000/planes/'

class Grid extends Component {
    state = {
        rows : 0,
        cols : 0,
        seats : []
    }
    componentDidMount = () => {
        this.populateSeats();
    }
    populateSeats = () => {
        axios.get(GET_SEATS_URL + `${this.props.flightId}/seats`)
        .then(res => {
            this.setState({
                rows : res.data.plane_data.rows,
                cols : res.data.plane_data.columns,
                seats : res.data.plane_data.seat_data
            })
        })
    }
    renderItems = () => {
        return this.state.seats.map(seat => 
            <GridItem isReserved={seat.is_reserved} reservee={seat.reservee}/>
        );
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Grid;


