import React, { Component } from "react";
import "./App.css";
// import searchFlights from "./searchFlights.js";
// import { DateTime } from "luxon";
// import Nav from "./Nav.jsx";
class FlightsDisplay extends Component {
    render() {
    const {flightInfo} = this.props
    
    const { currentPage, flightsPerPage } = this.props;
     
    // Logic for displaying todos
     const indexOfLastFlight = currentPage * flightsPerPage;
     const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
     const currentFlights= flightInfo.slice(indexOfFirstFlight, indexOfLastFlight);

     const renderFlights = currentFlights.map((item, index) => {
      return (
        <div className="flightDisplay" key={`item-${index}`}>
          <h3>From</h3>
          <p>{item.origin}</p>
          <h3>Depature</h3>
          <p>{item.dTime}</p>
          <h3>To</h3>
          <p>{item.destination}</p>
          <h3>Arrival</h3>
          <p>{item.aTime}</p>
          <h3>Price</h3>
          <p>{item.price}0 $</p>
          <h3>Duration</h3>
          <p>{item.flight_duration}</p>


          <h3>Number of connections</h3>
          <p>{item.transfers.length - 1}</p>
          
          {item.transfers.length > 1 ? item.transfers.map((transfer)=>(<li key={`item-${index}`}>{transfer.cityTo}</li>
          )) : <p>Direct</p> }

          <hr/>
        </div>
      )
      
    });
    return (
      <div className="App" style={{ border: "2px white solid" }}>
         {renderFlights}
      </div>
    );
  }

}

export default FlightsDisplay;
