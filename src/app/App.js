import React, { Component } from 'react';
import './App.css';
import AnimalListings from '../components/AnimalListings/AnimalListings.js';
import NewAnimalForm from '../components/NewAnimalForm/NewAnimalForm.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AnimalListings className='col-sm-6'/>
        <NewAnimalForm className='col-sm-6'/>
      </div>
    );
  }
}

export default App;
