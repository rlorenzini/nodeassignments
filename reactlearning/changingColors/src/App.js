import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {InputColor} from './components/InputColor.js'
import {DisplayColor} from './components/DisplayColor.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      color:''
    }
  }
  handleColorChange=(color)=>{
    this.setState({
      color:color
    })
  }
  render(){
  return (
    <div><InputColor colorChangedCallback={this.handleColorChange}/>
    <DisplayColor color={this.state.color}/></div>
)}
}

export default App;
