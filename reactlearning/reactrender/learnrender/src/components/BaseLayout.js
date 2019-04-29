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
  constructor(props){
   super(props)
   this.state ={
     books: [],
     title: '',
     genre: ''
   }
 }
componentDidMount() {
  this.populateBooks()
}
populateBooks() {
 let url = "http://localhost:8080/books"
 fetch(url)
 .then(response => response.json())
 .then(json => {
   this.setState({
     books: json
   })
 })
}
addBook=(e)=>{
 fetch('localhost:8080/books', {
   method: 'POST',
   body: JSON.stringify(this.state),
   headers: {
     "Content-type": "application/json"
   }
 }).then(()=>this.populateBooks())
 e.preventDefault()
}
recordChange=(e)=> {
 let userInput = e.target.name
 let title = e.target.title

 this.setState({
     [userInput]: e.target.value
   })
   console.log(this.state)
}
render(){
  return(
    <div>
    <h2>AddBook</h2>
    <form onSubmit = {this.addBook}>
      <input onChange = {this.recordChange} type='text' name='title' placeholder='Name of Book' />
      <input onChange = {this.recordChange} type='text' name='genre' placeholder='Genre of Book' />
      <input className = 'submitButton' type = 'submit'/>
    </form>
    </div>
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
