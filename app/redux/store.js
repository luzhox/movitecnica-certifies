import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"

import { home } from '../pages/home/state/reducer'

const reducer = combineReducers({loader: combineReducers({ home }),})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store