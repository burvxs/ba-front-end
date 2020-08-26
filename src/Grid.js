import React, { Component } from 'react';
import Axios from 'axios';

const GET_SEATS_URL = 'http://localhost/reservations'

class Grid extends Component {
    state = {
        rows : 5,
        cols : 3,
        itemCount : this.rows + this.cols,
        items : []
    }
    populateItems = () => {
        
    }
    renderItems = () => {
        return this.state.items;
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
