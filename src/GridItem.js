import React, { Component } from 'react';

class GridItem extends Component {
    state = {
        reservedName : '',
        isReserved : false
    }
    /*
        This method will be called when each grid item 
        is mounted or rendered to the DOM I need to check if 
        the seat is populated and get the reserved name.

        This component will be rendered iteratively (looped through)
        every time this component is rendered to the DOM it will do the validations
        and update the GridItem's styling based on validation data
    */
    componentDidMount = () => {

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default GridItem;
