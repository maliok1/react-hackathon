import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';
import { DateTime } from 'luxon';

import FlightDisplay from './FlightsDisplay.jsx';
import Nav from './Nav.jsx'
import airports from './vars.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightInfo: [],
      to: 'PRG',
      from: ''
    };
  }

  componentDidMount = async () => {
    const data = await searchFlights();
    console.log("data", data);
    this.setState({
      flightInfo: data
    });
    
  }
  componentDidUpdate= async() => {
    console.log(this.state.to);
    console.log(this.state.from)
  }

  handleClickDestination =(item)=> {
    this.setState({
      to:airports[item]
    })
    // console.log(this.state.to);
    
  }
  handleClickArrival =(item)=> {
    this.setState({
      from:airports[item]
    })

    // console.log(this.state.from);
  }

  render() {
    return (
      <div className="App">
        <Nav to={this.state.to} from={this.state.from} handleClickDestination={this.handleClickDestination} handleClickArrival={this.handleClickArrival} />
        <FlightDisplay flightInfo={this.state.flightInfo}
        />
      </div>
    );
  }
}

export default App;
