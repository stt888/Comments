import {createStore, applyMiddleware} from 'redux'
import commentsAct from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(
    commentsAct,
    composeWithDevTools(applyMiddleware(thunk))
)