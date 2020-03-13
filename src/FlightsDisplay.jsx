import React, { Component } from "react";
import "./App.css";
import searchFlights from "./searchFlights.js";
import { DateTime } from "luxon";
import Nav from "./Nav.jsx";
class FlightsDisplay extends Component {
  

  render() {
    const {flightInfo} = this.props
    
    const getFlightInfo = this.props.flightInfo.map((item, index)=> {
      return (
        <div key={`item-${index}`}>
          <h3>From</h3>
          <p>{item.origin}</p>
          <h3>Depature</h3>
          <p>{item.dTime}</p>
          <h3>To</h3>
          <p>{item.destination}</p>
          <h3>Arrival</h3>
          <p>{item.aTime}</p>
          <hr/>
        </div>
      );
    })

    return (
      <div className="App" style={{ border: "2px red solid" }}>
        {getFlightInfo}
      </div>
    );
  }
}

export default FlightsDisplay;
