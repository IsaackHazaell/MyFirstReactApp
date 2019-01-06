import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Navigation es la clase a importar
import Navigation from './components/Navigation.js';
import Form from './components/Form.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Form/>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
