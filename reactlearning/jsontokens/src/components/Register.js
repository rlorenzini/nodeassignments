import React,{Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';

class Register extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }
  handleSubmitRegistration=()=>(
    axios.post('http://localhost:8080/register',{
      username: this.state.username,
      password: this.state.password
    })
  )
  render(){
    return(
      <div>
      <h1>Register</h1>
      <input placeholder="New Username"/>
      <input placeholder="New Password"/>
      <button onClick={this.handleSubmitRegistration}>Submit New Login</button>
      </div>
    )
  }
}
export default Register
