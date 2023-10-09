import { combineReducers } from 'redux'
const initialState = {
  currentUser: null
}

export const ActionsTypes = {
  USER_LOGGED: 'user/login',
  USER_LOGOUT: 'user/logout'
}

const userReducer = (state = initialState, action: { type: string, payload: any }) => {
  if (action.type === ActionsTypes.USER_LOGGED) {
    return { ...state, currentUser: action.payload }
  }
  if (action.type === ActionsTypes.USER_LOGOUT) {
    return { ...state, currentUser: null }
  }
  return state
}

export const reducers = combineReducers({
  userReducer
})