import React,{Component} from 'react';
import {connect} from 'react-redux';
export class Counter extends Component {
  // constructor(){
  //   super()
    // this.state={
    //   count: 0
    // }
  // }
  // handleCounterIncrement=(e)=>{
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  // handleCounterDecrement=(e)=>{
  //   this.setState({
  //     count: this.state.count-1
  //   })
  // }
  render(){
    return(
      <div>
      <h3>{this.props.ctr}</h3>
      <button onClick={this.props.onIncrementCount}>Increment</button>
      <button onClick={this.props.onDecrementCount}>Decrement</button>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    ctr:state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onIncrementCount:()=>dispatch({type:'INC_COUNT'}),
    onDecrementCount:()=>dispatch({type:'DEC_COUNT'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
