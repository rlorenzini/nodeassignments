import React,{Component} from 'react';
import Header from './Header';
// import Login from './Login';
import Footer from './Footer';
// import Register from './Register';

class BaseLayout extends Component {
  render(){
    return(
      <div>
      <h1>BaseLayout</h1>
      <Header/>
      {this.props.children}
      <Footer/>
      </div>
    )
  }
}
export default BaseLayout
