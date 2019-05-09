import React,{Component} from 'react';
import Header from './Header';
// import Login from './Login';
import Footer from './Footer';
// import Register from './Register';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <h1>BaseLayout</h1>
      <Header onLogout={this.props.onLogout} isAuthenticated={this.props.isAuthenticated}
      history={this.props.history}/>
      {this.props.children}
      <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onLogout:()=>dispatch({type:"LOGOUT"})
  }
}

const mapStateToProps=(state)=>{
  return{
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BaseLayout))
