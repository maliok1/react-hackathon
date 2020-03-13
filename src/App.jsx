import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';
import { DateTime } from 'luxon';

import FlightDisplay from './FlightsDisplay.jsx';
import Nav from './Nav.jsx'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: [],
    };
  }
  componentDidMount = async () => {
    const data = await searchFlights();
    console.log("data", data);
    this.setState({
      flightInfo: data
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <FlightDisplay flightInfo={this.state.flightInfo}
        />
      </div>
    );
  }
}

export default App;
