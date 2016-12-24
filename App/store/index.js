import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

const logger = createLogger()
function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        applyMiddleware(logger)
    )
}

export default configureStore
