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
      loading:true,
      flightInfo: [],
      to: '',
      from: ''
    };
  }

  componentDidMount = () => {
    this.getFlights()
  }
  componentDidUpdate= async() => {
    console.log(this.state.to);
    console.log(this.state.from)
  }

  getFlights=async()=>{
    const data = await searchFlights(this.state.to,this.state.from);
    console.log("data", data);
    this.setState({
      flightInfo: data,
      loading:false
    });
  }

  handleClickDestination =(item)=> {
    this.setState({
      to:airports[item]
    })
  }
  handleClickArrival =(item)=> {
    this.setState({
      from:airports[item]
    })
  }

  handleClickSubmit=()=> {
    this.setState({
      loading: true
    },this.getFlights)
    
    console.log('boom')
  }
  render() {
    return (
      <div className="App">
        <Nav to={this.state.to} from={this.state.from} handleClickDestination={this.handleClickDestination} handleClickArrival={this.handleClickArrival}  handleClickSubmit={this.handleClickSubmit}/>
       {this.state.loading ? 'loading' : <FlightDisplay flightInfo={this.state.flightInfo}
        />}
      </div>
    );
  }
}

export default App;
