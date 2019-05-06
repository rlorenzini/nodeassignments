import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './styling/Footer.css'

class Footer extends Component {
  render(){
    return(
      <div>
      <ul className="footer">
      <li><Link to='/'>Test Link</Link></li>
      <li><Link to='/login-page'>Test Link</Link></li>
      </ul>
      </div>
    )
  }
}
export default Footer
