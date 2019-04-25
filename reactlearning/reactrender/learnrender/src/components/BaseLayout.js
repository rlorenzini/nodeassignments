import React,{Component} from 'react';
import './BaseLayout.css'
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render(){
    return(<ul className="menu">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/view-all-books'>View All</Link></li>
      <li><Link to='/add-book'>Add</Link></li>
      </ul>
    )
  }
}

export class Footer extends Component {
  render(){
    return(
      <p className="footer">Copyright 2019</p>
    )
  }
}

export class BookList extends Component {
  render(){
    return(
      <h1>BookList</h1>
    )
  }
}

export class AddBook extends Component {
  render(){
    return(
      <h2>AddBook</h2>
    )
  }
}

export class BaseLayout extends Component {
  render(){
    return(<div>
      <Menu/>
      {this.props.children}
      <Footer/>
      </div>
    )
  }
}
