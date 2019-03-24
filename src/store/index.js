import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'zhu'}, action) => {
  if(action.type === 'getDataList') {
    return {
      name: 'zhu',
      homelist: action.payload
    }
  }
  return state
}

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
  const defalutState = window.context.homelist
  return createStore(reducer, defalutState,  applyMiddleware(thunk))
}
