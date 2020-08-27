import React, { Component } from 'react';

class RollingBackground extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="bg-image img1"></div>
            <div className="bg-image img2"></div>
            <div className="bg-image img3"></div>
            <div className="bg-image img4"></div>
            <div className="bg-image img5"></div>
            <div className="bg-image img6"></div>
          </React.Fragment>
        );
    }
}

export default RollingBackground;
