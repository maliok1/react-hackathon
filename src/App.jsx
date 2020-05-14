import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';
import { DateTime } from 'luxon';

import FlightDisplay from './FlightsDisplay.jsx';
import Nav from './Nav.jsx'
import airports from './vars.json'
import Spinner from './Spinner.jsx'
import Pagination from './Pagination.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading:true,
      flightInfo: [],
      to: '',
      from: '',
      currentPage: 1,
      flightsPerPage: 5, 
    };
    this.handleClickPagination = this.handleClickPagination.bind(this)
    this.handlePreviousPage = this.handlePreviousPage.bind(this)
    this.handleNextPage = this.handleNextPage.bind(this)
  }

  componentDidMount = () => {
    this.getFlights()
  }
  
  getFlights= async() =>{
    const data = await searchFlights(this.state.to,this.state.from);
    // console.log("data", data);
    this.setState({
      flightInfo: data,
      loading:false
    });
  }

  handleClickDestination= (item) => {
    this.setState({
      to:airports[item]
    })
  }
  handleClickArrival= (item) => {
    this.setState({
      from:airports[item]
    })
  }

  handleClickSubmit=()=> {
    this.setState({
      loading: true
    },this.getFlights)
  }
 
  handleClickPagination(event){
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  handlePreviousPage(){
    if(this.state.currentPage > 1){
      this.setState({
      currentPage: this.state.currentPage - 1
      })
    }
  }
  handleNextPage(){
    if(this.state.currentPage < this.state.flightInfo.length / this.state.flightsPerPage){
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }
  render() {  
    return (
      <div className="App">
        { this.state.loading 
        
        ? <Spinner /> 
        :
        <>
        <Nav to={this.state.to} from={this.state.from} handleClickDestination={this.handleClickDestination} handleClickArrival={this.handleClickArrival}  handleClickSubmit={this.handleClickSubmit} />

        <Pagination flightInfo={this.state.flightInfo} currentPage={this.state.currentPage} flightsPerPage={this.state.flightsPerPage} handleClickPagination={this.handleClickPagination} handlePreviousPage={this.handlePreviousPage} handleNextPage={this.handleNextPage} />
  
        <FlightDisplay flightInfo={this.state.flightInfo} currentPage={this.state.currentPage} flightsPerPage={this.state.flightsPerPage}
        /> 
  
        <Pagination flightInfo={this.state.flightInfo} currentPage={this.state.currentPage} flightsPerPage={this.state.flightsPerPage} handleClickPagination={this.handleClickPagination} handlePreviousPage={this.handlePreviousPage} handleNextPage={this.handleNextPage} />
        </>
        }
       </div>        
    );
  }
}

export default App;
