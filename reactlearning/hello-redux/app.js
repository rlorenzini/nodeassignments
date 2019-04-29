const redux = require('redux')
const initState = { // create initial global state
  counter:0,
  cartItems:[],
  isAuthenticated: false
}
// state=initState == if stat null/undef, use initState
let rootReducer = (state=initState,action) =>{ // create reducer
  if(action.type == "INC_COUNTER"){
    return {
      ...state,
      counter: state.counter+1
    }
  } else if(action.type == "IS_AUTH"){
    return {
      ...state,
      isAuthenticated: action.authenticated
    }
  } else if(action.type == "ADD_COUNTER"){
    return {
      ...state,
      counter: state.counter+action.value
    }
  }
  return state
}
const store = redux.createStore(rootReducer) // create state store
store.subscribe(() => { // create subscriptions; called on global variable update
  console.log("[Store]",store.getState())
})
console.log(store.getState()) //get global state

// dispatching actions
store.dispatch({ // type: is required; value is variable
  type: 'INC_COUNTER'
})
store.dispatch({
  type: 'IS_AUTH',
  authenticated: true
})
store.dispatch({
  type: 'ADD_COUNTER',
  value: 10
})
console.log(store.getState())
// global state is updated by reducer; reducer gets info from action
