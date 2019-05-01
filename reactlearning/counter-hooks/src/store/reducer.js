import * as actionTypes from './actions/actionTypes'
const initialState={
  count:99,
  tasks:[]
}
const reducer=(state=initialState,action)=>{
  switch(action.type){ //switching on the action.type
    case 'INC_COUNT':
    return{
      ...state,
      count: state.count+1
    }
    case 'DEC_COUNT':
    return{
      ...state,
      count: state.count-1
    }
    case 'MULTI_COUNT':
    return{
      ...state,
      count: state.count*5
    }
    case 'DIV_COUNT':
    return{
      ...state,
      count: state.count/3
    }
    case 'ADD_NEW_TASK':
    return{
      ...state,
      tasks:state.tasks.concat(action.task)
    }
  }
  return state
}
export default reducer
