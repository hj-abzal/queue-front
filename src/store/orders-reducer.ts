import {Dispatch} from "redux";
import {ordersAPI} from "../api/api";

type ActionsType = ReturnType<typeof getOrders> | ReturnType<typeof selectedElementAC>
export type RestaurantsInitStateType = typeof restaurantOrdersInitState
export type OrdersType = {
    id: number
    is_ready: boolean
    key: string
    restaurant_id: number
}
export const restaurantOrdersInitState = {
    orders: [] as OrdersType[],
    idOfSelectedElement: 0
}

//REDUCER LOGIC
export const ordersReducer = (state: RestaurantsInitStateType = restaurantOrdersInitState, action: ActionsType): RestaurantsInitStateType => {
    switch (action.type) {
        case "GET_ORDERS": {
            return {
                ...state,
                orders: action.orders
            };
        }
        case "ELEMENT_IS_SELECTED": {
            return {
                ...state,
                idOfSelectedElement: action.id
            }
        }
        default:
            return state
    }
}

//ACTION CREATORS
export const selectedElementAC = (id: number) => ({
    type: "ELEMENT_IS_SELECTED" as const, id
})
export const getOrders = (orders: OrdersType[]) => ({
    type: "GET_ORDERS" as const, orders
})

//THUNK CREATORS
export const getOrdersTC = (id: number) => async (dispatch: Dispatch) => {
    const orders = await ordersAPI.getAllOrders(id)
    const localS = localStorage.getItem('key')
    if (localS  && orders.find((o) => o.id === +localS)) {
        dispatch(selectedElementAC(+localS))
    } else {
        localStorage.removeItem('key')
    }
    dispatch(getOrders(orders))
}