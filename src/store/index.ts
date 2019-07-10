import { createStore } from 'redux'
import { ActionType } from './types';

const initalState = {
  auth: null
}

const authReducer = (state = initalState, action: ActionType) => {
  console.log(action)
  return state
}

const store = createStore(authReducer)

export default store


