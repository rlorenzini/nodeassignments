import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greeting} from './components/Greeting'
import {Article} from './components/Article'
import {Counter} from './components/Counter'
import {CustomerList} from './components/CustomerList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      customers:[]
    }
  }
  handleNameChange=(e)=>{
    this.setState({
      name: e.target.value
    })
  }
  handleNameSave=()=>{
    let name = this.state.name
    this.setState({
      customers: this.state.customers.concat(name)
      //array.push changes a STATE, which cannot be done in REACT
      //concatenate creates a new array state and leaves the original state untouched
      //my use .concat to add values to arrays
    })
  }
  render() {
    return (
      <div>
      <input onChange={this.handleNameChange} type="text" placeholder="Input"/>
      <button onClick={this.handleNameSave}>Save</button>
      <h2>{this.state.name}</h2>
      <CustomerList customers={this.state.customers}/>
      <Counter/>
      <h1>Hello World</h1>
      <Greeting name="Richard"/>
      <Article title="Hello Python" body="This is a Python article" noOfComments="23" noOfLikes="12"/>
      <Article title="Hello JS" body="This is a JS article" noOfComments="19" noOfLikes="47"/>
      </div>
    )
  }
}



export default App;
