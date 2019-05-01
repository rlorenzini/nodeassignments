//action creators are functions which return objects
import * as actionTypes from './actionTypes.js'
export const incCount=()=>{
  return{
    type:actionTypes.INC_COUNT
  }
}
export const decCount=()=>{
  return{
    type:actionTypes.DEC_COUNT
  }
}
export const multiCount=()=>{
  return{
    type:actionTypes.MULTI_COUNT
  }
}
export const divCount=()=>{
  return{
    type:actionTypes.DIV_COUNT
  }
}
export const addNewTask=()=>{
  return{
    type:actionTypes.ADD_NEW_TASK
  }
}
