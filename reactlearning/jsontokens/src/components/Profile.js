import React,{Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
  constructor(){
    super()
    this.state={
      username:''
    }
  }

  render(){
    return(
      <div>
      <h1>Profile</h1>
      <h3>{this.props.username}</h3>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    username:state.username
  }
}
export default connect(mapStateToProps)(Profile)
