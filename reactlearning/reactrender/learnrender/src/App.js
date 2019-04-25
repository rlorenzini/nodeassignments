import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BaseLayout} from './components/BaseLayout.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render(){
    return(<div><p>Home</p>
      <h1>{this.props.children}</h1>
      </div>
    )
  }
}

export default App;
