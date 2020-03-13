import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';
import { DateTime } from 'luxon';
import FlightDisplay from './FlightsDisplay.jsx';




class App extends Component {

  render() {
    return (
      <div className="App">
        <FlightDisplay  />
      </div>
    );
  }
}

export default App;
