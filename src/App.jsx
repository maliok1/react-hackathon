import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';
import { DateTime } from 'luxon';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightInfo: [],
    }
  }
  componentDidMount= async()=>
  {
    console.log("I've mounted");

    const data = await searchFlights();
 console.log('data', data);
 
    this.setState({
      flightInfo: data
    })
    
  }
  // DateTime.fromMillis(data.data[0].aTime * 1000).toFormat('hh:mm')

  render() {
    return (
      <div className="App">
        {this.state.origin}
        {this.state.destination}
        {this.state.dTime}
        {this.state.aTime}
      </div>
    );
  }
}

export default App;
