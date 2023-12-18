import { combineReducers } from 'redux'
const initialStateUser = {
  currentUser: null
}

const initialStateObject = {
  objectToEdit: undefined
}


export const ActionsTypes = {
  USER_LOGGED: 'user/login',
  USER_LOGOUT: 'user/logout',
  OBJECT_EDIT: 'object/edit'
}

const userReducer = (state = initialStateUser, action: { type: string, payload: any }) => {
  if (action.type === ActionsTypes.USER_LOGGED) {
    return { ...state, currentUser: action.payload }
  }
  if (action.type === ActionsTypes.USER_LOGOUT) {
    return { ...state, currentUser: null }
  }
  return state
}

const objectReducer = (state = initialStateObject, action: { type: string, payload: any }) => {
  if (action.type === ActionsTypes.OBJECT_EDIT) {
    return { ...state, objectToEdit: action.payload }
  }
  return state
}

export const reducers = combineReducers({
  userReducer,
  objectReducer
})