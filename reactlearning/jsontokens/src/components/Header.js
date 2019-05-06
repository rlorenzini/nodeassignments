import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './styling/Header.css'

class Header extends Component {
  render(){
    return(
      <div>
      <ul className="headerMenu">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login-page'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      </ul>
      </div>
    )
  }
}
export default Header
