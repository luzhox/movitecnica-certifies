import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../redux/reducers'
import { checkPendingActions } from './actionsDependencies'

const middlewares = []

const actionsDependencies = (store) => (next) => (action) => {
  next(action)
  checkPendingActions(store.getState())
}

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

middlewares.push(actionsDependencies)
middlewares.push(thunk)

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(
  reducers,
)

export default store
