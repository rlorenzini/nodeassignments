import React from 'react';
import {connect} from 'react-redux';
import {incCount,decCount,multiCount,divCount} from '../store/actions/actionCreators.js'

const Counter=props=> {

  return(
    <div>
    <h1>{props.name}</h1>
    <h2>{props.ctr}</h2>
    <button onClick={props.onIncrementCount}>Increment</button>
    <button onClick={props.onDecrementCount}>Decrement</button>
    <button onClick={props.onMultiplyCount}>Multiply by 5</button>
    <button onClick={props.onDivideCount}>Divide by 3</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    ctr:state.ctr.count
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    onIncrementCount:()=>dispatch(incCount()),
    onDecrementCount:()=>dispatch(decCount()),
    onMultiplyCount:()=>dispatch(multiCount()),
    onDivideCount:()=>dispatch(divCount())
  }
}; // dispatch is used to tell the reducer you want to change a global state
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
