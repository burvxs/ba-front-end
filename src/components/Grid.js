import React, { Component } from 'react';
import axios from 'axios';
import GridItem from './GridItem';

const GET_SEATS_URL = 'http://localhost:3000/planes/'

class Grid extends Component {
    isUnmounted = false;

    state = {
        rows : 0,
        cols : 0,
        seats : [],
        isLoaded : true
    }
    componentDidMount = () => {
        this.populateSeats();
    }

    componentWillUnmount = () => {
        this.isUnmounted = true
    }
    /*
        Sets the state of the rows, columns and seats array
        if the component gets unmounted (leaves the DOM) this
        method does nothing it just returns other wise we get a memory 
        leak or something I don't know I just wanted the warning gone.
    */
    populateSeats = () => {
        axios.get(GET_SEATS_URL + `${this.props.flightId}/seats`)
        .then(res => {
            if (this.isUnmounted){
                return
            }
            this.setState({
                rows : res.data.plane_data.rows,
                cols : res.data.plane_data.columns,
                seats : res.data.plane_data.seat_data,
            })
        })
        .catch(error => {
            console.warn(error);
        })
    }
    /*
        This method maps the seats array and returns a array of grid item 
        components and passes down the seat information to the grid item component 
        and then the GridItem handles that data for each reccurring GridItem thats being 
        outputted in this map method
    */
    renderItems = () => {
        return this.state.seats.map((seat, index) => 
            <GridItem isReserved={seat.is_reserved} reservee={seat.reservee} key={index}/>
        );
    }
    render() {
        const gridStyle = {
          display: "grid",
          gridTemplateColumns: `repeat(4, 200px)`,
          gridTemplateRows: `repeat(${this.state.rows}, 150px)`
        };
        return (
            <div style={gridStyle}>
                {this.renderItems()}
            </div>
        );
    }
}

export default Grid;


