import React, { Component } from 'react';
// import {render} from 'react-dom';
import parse from 'html-react-parser';
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
      <div className="code-section">
      <button className="code-title">CODE</button>
      <pre>
      <code><p>{'function tacos(){"return tacos"}'}</p></code></pre></div>

      <xmp>function tacos(){"return tacos"}</xmp>

      <div>{'First \u00b7 Second'}</div>

      <div dangerouslySetInnerHTML={{__html: 'function tacos(){return tacos}'}} />

      <div>{parse('<p>function tacos()</p><p>&emsp;{return taocs}</p>')}</div>
      {this.props.children}
      </div>
    )
  }

}

export default App;
