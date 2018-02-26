import React, { Component } from 'react';
import Unsplash from 'unsplash-js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const unsplash = new Unsplash({
      applicationId: process.env.REACT_APP_UNSPLASH_ID,
      secret: process.env.REACT_APP_UNSPLASH_SECRET
    });

    this.state = {
      images: [],
      unsplash
    };
  }

  getImage = () => {
    // Contact the unsplash api and save the response data to state.
    const { unsplash } = this.state;

    unsplash.photos
      .getRandomPhoto()
      .then(response => response.json())
      .then(json => console.log(json));

    alert('I have contacted the unsplash api. Check the logs 😁');
  };

  render() {
    return (
      <div className="App">
        {/* This is the main application and will be a react application that manages state. */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.getImage} className="App-button">
          Create card
        </button>
      </div>
    );
  }
}

export default App;
