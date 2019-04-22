import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.js'
import {Review} from './components/Review.js'
import {WatchKit} from './components/WatchKit.js'

class App extends Component {
  render() {
    return (
    <div><Header/><Review/><WatchKit/>
    </div>
  )
}
}

export default App;
