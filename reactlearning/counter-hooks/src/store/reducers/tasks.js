import * as actionTypes from './../actions/actionTypes'

const initialState={
  tasks:[]
}
const taskReducer=(state=initialState,action)=>{
  switch(action.type){ //switching on the action.type
    case 'ADD_NEW_TASK':
    return{
      ...state,
      tasks:state.tasks.concat(action.task)
    }
  }
  return state
}
export default taskReducer
