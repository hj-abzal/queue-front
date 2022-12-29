import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ordersReducer} from "./orders-reducer";
import {appReducer} from "./app-reducer";
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    orders: ordersReducer,
    app: appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

//@ts-ignore
window.store = store;