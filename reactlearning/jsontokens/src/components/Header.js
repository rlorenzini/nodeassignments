import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './styling/Header.css';

class Header extends Component {
  handleLogoutClick=()=>{
    localStorage.removeItem('jsonwebtoken')
    this.props.onLogout()
    this.props.history.push('/')
  }
  render(){
    return(
      <div>
      <ul className="headerMenu">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink to='/login-page'>Login</NavLink></li>
      {this.props.isAuthenticated ?
      <li><a onClick={this.handleLogoutClick} href='#'>Logout</a></li> : null}
      <li><NavLink to='/register'>Register</NavLink></li>
      <li><NavLink to='profile'>Profile</NavLink></li>
      </ul>
      </div>
    )
  }
}
export default Header
