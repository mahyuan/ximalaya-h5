import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = componseEnhancers(applyMiddleware(sagaMiddleware))

const store =  createStore(reducer, enhancer)
sagaMiddleware.run(sagas)

export default store
