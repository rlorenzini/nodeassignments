import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      complaints:[]
    }
  }
  componentDidMount(){
    // const url = "http://www.omdbapi.com/?s=batman&apikey=a90050c8"
    const url = "https://agile-mesa-12521.herokuapp.com/api"
    fetch(url)
    .then(response=>response.json())
    .then(json=>{this.setState({complaints:json})})
  }
  render(){
    let complaints = this.state.complaints
    let complaintItems = complaints.map((complaint)=>{
      return (<li key={complaint.id}>
      Category: {complaint.category} <br></br>
      User: {complaint.userid} <br></br>
      Latitude: {complaint.lat} <br></br>
      Longitude: {complaint.long} <br></br>
      Description: {complaint.description}
        </li>)
    })
  return (
    <div><h1>Complaints:</h1> <br></br> <ul>{complaintItems}</ul></div>
  )}
}

export default App;
