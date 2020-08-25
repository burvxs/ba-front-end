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
