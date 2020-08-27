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
        setInterval(this.populateSeats, 1000 );
    }

    componentWillUnmount = () => {
        this.isUnmounted = true
    }

    getStaticSeats = () => {
        axios.get(GET_SEATS_URL + `${this.props.flightId}/staticseats`)
        .then(res => {
            console.log(res.data);
            if (this.isUnmounted){
                return
            }
            this.setState({
                seats : res.data.seat_data
            })
        })
        .catch(error => {
            console.warn(error);
        })
    }

    /*
        Sets the state of the rows, columns and seats array
        if the component gets unmounted (leaves the DOM) this
        method does nothing it just returns other wise we get a memory
        leak or something I don't know I just wanted the warning gone.
    */
    populateSeats = () => {
        if (this.props.responseSeats !== undefined){
            axios.get(GET_SEATS_URL + `${this.props.flightId}/seats`)
            .then((res) => {
            console.log(res.data);
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                rows: res.data.plane_data.rows,
                cols: res.data.plane_data.columns,
                seats: res.data.plane_data.seat_data,
            });
            })
            .catch((error) => {
            console.warn(error);
            });
        }else{
            console.log("Hello");
            this.setState({
                seats : this.props.responseSeats
            })
        }

    }
    passReserveInfo = (reserveInfo, index) => {
        let tempSeatItems = Object.assign(this.state.seats)
        tempSeatItems[index] = reserveInfo
        this.setState({
            seats : tempSeatItems
        });
        this.props.onDataHandle(this.state.seats, index)
        console.log(this.state.seats);
    }
    /*
        This method maps the seats array and returns a array of grid item
        components and passes down the seat information to the grid item component
        and then the GridItem handles that data for each reccurring GridItem thats being
        outputted in this map method
    */
    renderItems = () => {
        return this.state.seats.map((seat, index) =>
            <GridItem
                onReserve={this.passReserveInfo}
                isReserved={seat.is_reserved}
                reservee={seat.reservee}
                index={index}
                key={index}
            />
        );
    }
    render() {
        const gridStyle = {
          display: "grid",
          gridTemplateColumns: `repeat(4, 200px)`,
          gridTemplateRows: `repeat(${this.state.rows}, 150px)`,
          rowGap : "10px",
          columnGap : "17px"
        };
        return (
          <div>
            <h1>Please select an available seat</h1>
            <div style={gridStyle}>{this.renderItems()}</div>
          </div>
        );
    }
}

export default Grid;
