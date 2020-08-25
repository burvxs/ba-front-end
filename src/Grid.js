import React, { Component } from 'react';

class Grid extends Component {
    state = {
        rows : 5,
        cols : 3,
        itemCount : this.rows + this.cols,
        items : []
    }
    populateItems = () => {
        for(let i = 0; i < itemCount; i++){
            this.setState({
                items : [...items, <GridItem/>]
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.items}
            </div>
        );
    }
}

export default Grid;
