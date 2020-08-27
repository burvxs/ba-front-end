import React, { Component } from 'react';
import '../App.css';

class RollingBackground extends Component {
    render() {
        return (
          <div>
            <div className="bg-image img1"></div>
            <div className="bg-image img2"></div>
            <div className="bg-image img3"></div>
          </div>
        );
    }
}

export default RollingBackground;
