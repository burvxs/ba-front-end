import React, { Component } from 'react';

class GridItem extends Component {
    state = {
        gridItemColor : 'grey',
        gridBorderColor : 'white'
    }
    /*
        This method will be called when each grid item 
        is mounted or rendered to the DOM I need to check if 
        the seat is populated and get the reserved name.

        This component will be rendered iteratively (looped through)
        every time this component is rendered to the DOM it will do the validations
        and update the GridItem's styling based on validation data
    */
    setGridItemValues = () => {
        if (this.props.isReserved){
            this.setState({
                gridBorderColor : 'red'
            })
        }else{
            this.setState({
                gridBorderColor : 'white'
            })
        }
    }
    componentDidMount = () => {
        this.setGridItemValues();
    }
    render() {
        const itemStyle = {
          width: "200px",
          height: "100px",
          backgroundColor : this.state.gridItemColor,
          borderColor : this.state.gridBorderColor
        };

        return (
            <div style={itemStyle}>
                <p>{this.props.reservee}</p>
            </div>
        );
    }
}

export default GridItem;