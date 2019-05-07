import React,{Component} from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
import {setAuthenticationHeader} from '../utils/authentication'

class Register extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }

  handleTextBoxChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmitRegistration=()=>(
    axios.post('http://localhost:8080/register',{
      username: this.state.username,
      password: this.state.password
    })
    .then(response=>{

      let token = response.data.token
      localStorage.setItem('jsonwebtoken',token)
      this.props.onAuthenticated(token)
      setAuthenticationHeader(token)
    })
    .catch(error=>console.log(error))
  )

  render(){
    return(
      <div>
      <h1>Register</h1>
      <input name="username" onChange={this.handleTextBoxChange} placeholder="New Username"/>
      <input name="password" onChange={this.handleTextBoxChange} type="password" placeholder="New Password"/>
      <button onClick={this.handleSubmitRegistration}>Submit New Login</button>
      </div>
    )
  }
}
export default Register
