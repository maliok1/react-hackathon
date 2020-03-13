import React, { Component } from 'react';
import './App.css';
import searchFlights from './searchFlights.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
    }
  }
  componentDidMount= async()=>
  {
    console.log("I've mounted");

    const url = await searchFlights();
    const response =  await fetch(url);
    console.log('response', response);
  
    const data = await response.json()
    console.log('data', data);   
    this.setState({
      searchResults: data.search_params
    })
    
  }

  render() {
    return (
      <div className="App">
        {this.state.searchResults}
      </div>
    );
  }
}

export default App;
