import React, { Component } from "react";
import "./App.css";
import searchFlights from "./searchFlights.js";
import { DateTime } from "luxon";

class FlightsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: []
    };
  }
  componentDidMount = async () => {
    const data = await searchFlights();
    console.log("data", data);
    this.setState({
      flightInfo: data
    });
  };

  render() {
    const getFlightInfo = this.state.flightInfo.map((item, index)=> {
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
