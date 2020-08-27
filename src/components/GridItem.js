import React, { Component } from 'react';

class GridItem extends Component {
    state = {
        gridItemColor : 'grey',
        gridBorderColor : '1px solid white',
        itemText : '',
        userText : '',
        userReservee : '',
        isReserved : false,
        seatPrice : 325
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
              gridBorderColor: "1px solid red",
              itemText: "Not Available",
            });
        }else{
            this.setState({
              gridBorderColor: "1px solid white",
              itemText: "Available",
            });
        }
    }
    handleClick = () => {
        if (!this.props.isReserved){
            this.setState({
                isReserved : true,
                userText : <p>You've reserved this spot</p>,
                itemText : ''
            })
            this.props.onReserve({
                reservee : 'Ben',
                is_reserved : this.state.isReserved
            }, this.props.index);
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
          border : this.state.gridBorderColor
        };
        return (
            <div style={itemStyle} className="grid-item" onClick={this.handleClick}>
                <p>{this.state.itemText}</p>
                   {this.state.userText}
            </div>
        );
    }
}

export default GridItem;
