import React, { Component } from 'react';
import './App.css';
import AnimalListings from '../components/AnimalListings/AnimalListings.js';
import NewAnimalForm from '../components/NewAnimalForm/NewAnimalForm.js';
import firebaseApp from '../firebaseRequests/connection.js';
import listingRequests from '../firebaseRequests/animals.js';

class App extends Component {
  state = {
    mashups: [],
  };

  componentDidMount () {
    firebaseApp();
    listingRequests.getRequest().then(mashups => {
      this.setState({mashups});
    }).catch(console.error.bind(console));
  }

  formSubmit = (newMashup) => {
    listingRequests.postRequest(newMashup)
      .then((() => {
        listingRequests.getRequest()
          .then((mashups) => {
            this.setState({mashups});
          });
      })).catch(console.error.bind(console));
  };

  render () {
    return (
      <div className="App">
        <div className='col-sm-6'><AnimalListings mashups={this.state.mashups}/></div>
        <div className='col-sm-6'><NewAnimalForm formEvent={this.formSubmit}/></div>
      </div>
    );
  }
}

export default App;
