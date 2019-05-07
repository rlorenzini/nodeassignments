import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Login from './components/Login'
// import Header from './components/Header'
// import BaseLayout from './components/BaseLayout'
// import Register from './components/Register'

class App extends Component {

  render() {
    return (
      <div>
      <h1>Welcome to this Barebones Website!</h1>
      {this.props.children}
      </div>
    )
  }

}

export default App;
