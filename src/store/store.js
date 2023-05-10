import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { traderReducer } from './trader/trader.reducer.js'
import { userReducer } from './user/user.reducer.js'
import { shareReducer } from './share/share.reducer.js'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose()

const rootReducer = combineReducers({
    traderModule: traderReducer,
    userModule: userReducer,
    shareModule: shareReducer,
})

export const store = createStore(rootReducer, middleware)