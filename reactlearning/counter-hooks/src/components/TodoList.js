import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewTask} from '../store/actions/actionCreators.js'
class TodoList extends Component {
  constructor(){
    super()
    this.state={
      taskName:''
    }
  }
  handleAddTaskClick=(e)=>{
    this.props.onTaskAdded(this.state.taskName)
  }
  handleTextBoxChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
      <div>
      <h3>TodoList</h3>
      <input onChange={this.handleTextBoxChange} type="text" name="taskName"/>
      <button onClick={this.handleAddTaskClick}>Add Task</button>
      <p>Last Task Entry: {this.props.tasks}</p>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    tasks:state.tsk.tasks
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onTaskAdded:(taskName)=>dispatch({type:'ADD_NEW_TASK',task:taskName})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
