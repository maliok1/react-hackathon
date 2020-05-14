import React, { Component } from 'react';
import './App.css';
class Spinner extends Component { 

  render() {
      return (
        <div>
          <div className="mesh-loader">
            <div className="set-one">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="set-two">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
      </div>
      );
  }
}
export default Spinner;