const initialState={
  count:99,
  books:[],
  isAuthenticated:false
}
const reducer=(state=initialState,action)=>{
  if(action.type==="INC_COUNT"){
    return{
      ...state,
      count: state.count+1
    }
  }else if(action.type==="DEC_COUNT"){
    return{
      ...state,
      count: state.count-1
    }
  }
  return state
}
export default reducer
