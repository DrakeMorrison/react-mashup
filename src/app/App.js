import React, { Component } from 'react';
import './App.css';
import AnimalListings from '../components/AnimalListings/AnimalListings.js';
import NewAnimalForm from '../components/NewAnimalForm/NewAnimalForm.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className='col-sm-6'><AnimalListings /></div>
        <div className='col-sm-6'><NewAnimalForm /></div>
      </div>
    );
  }
}

export default App;
