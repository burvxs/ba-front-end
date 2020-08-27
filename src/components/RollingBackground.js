import React, { Component } from 'react';
import '../App.css';

class RollingBackground extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="bg-image img1"></div>
            <div className="bg-image img2"></div>
            <div className="bg-image img3"></div>
          </React.Fragment>
        );
    }
}

export default RollingBackground;
