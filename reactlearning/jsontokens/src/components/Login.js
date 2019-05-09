import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthenticationHeader} from '../utils/authentication'

class Login extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
  }

  handleSubmitLogin=()=>(
    axios.post('http://localhost:8080/login',{
      username: this.state.username,
      password: this.state.password,
    })
    .then(response=>{

      console.log("button was clicked")
      let token = response.data.token
      let username = response.data.username
      console.log(token)

      localStorage.setItem('jsonwebtoken',token)
      this.props.onAuthenticated(username,token)

      setAuthenticationHeader(token)
    })
    .catch(error=>console.log(error))
  )

  handleInputChange=(e)=>(

    this.setState({
      [e.target.name]:e.target.value
    })
  )

  handleHelloClick=()=>{
    axios.get('http://localhost:8080/hello')
    .then(response=>{
        console.log(response.data)
      })
    }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <input onChange={this.handleInputChange} name="username" placeholder="username"></input>
      <input onChange={this.handleInputChange} name="password" placeholder="password"></input>
      <button onClick={this.handleSubmitLogin}>Login</button>
      <button onClick={this.handleHelloClick}>Say Hello</button>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    uname:state.username
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onAuthenticated:(username,token)=>dispatch({type:'ON_AUTH',username:username,token:token})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
