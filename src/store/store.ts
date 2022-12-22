import {combineReducers, createStore} from "redux";
import {ordersReducer} from "./orders-reducer";
import {appReducer} from "./app-reducer";


export const rootReducer = combineReducers({
    restaurantOrders: ordersReducer,
    restaurants: appReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store