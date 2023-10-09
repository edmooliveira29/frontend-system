import { applyMiddleware, legacy_createStore } from 'redux'
import logger from 'redux-logger'

import { reducers } from './reducers' 

export const store = legacy_createStore(reducers, applyMiddleware(logger))