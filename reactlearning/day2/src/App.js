import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greeting} from './components/Greeting'
import {Article} from './components/Article'
import {Counter} from './components/Counter'

class App extends Component {
  render() {
    return (
      <div>
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
