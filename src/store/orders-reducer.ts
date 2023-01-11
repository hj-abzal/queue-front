import {Dispatch} from "redux";
import {ordersAPI} from "../api/api";

type ActionsType =
    | ReturnType<typeof getOrders>
    | ReturnType<typeof selectedElementAC>
    | ReturnType<typeof isReadyCloseModal>
export type RestaurantsInitStateType = typeof restaurantOrdersInitState
export type OrdersType = {
    id: number
    is_ready: boolean
    key: string
    restaurant_id: number
}
export const restaurantOrdersInitState = {
    orders: [] as OrdersType[],
    idOfSelectedElement: 0,
    loader: false,
    isReadyModalOpen: true,
}

//REDUCER LOGIC
export const ordersReducer = (state: RestaurantsInitStateType = restaurantOrdersInitState, action: ActionsType): RestaurantsInitStateType => {
    switch (action.type) {
        case "GET_ORDERS": {
            return {
                ...state,
                orders: action.orders,
                loader: action.loader
            };
        }
        case "ELEMENT_IS_SELECTED": {
            return {
                ...state,
                idOfSelectedElement: action.id
            }
        }
        case "IS_READY_CLOSE_MODAL": {
            return {
                ...state,
                isReadyModalOpen: action.isReady
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
    type: "GET_ORDERS" as const, orders, loader: true
})
export const isReadyCloseModal = (isReady: boolean) => ({
    type: "IS_READY_CLOSE_MODAL" as const, isReady
})

//THUNK CREATORS
export const getOrdersTC = (id: number) => async (dispatch: Dispatch) => {
    const orders = await ordersAPI.getAllOrders(id)
    const localS = localStorage.getItem('key')
    if (localS) {
        const selected = orders.find((o) => o.id === +localS)
        if (selected) {
            if (selected.is_ready) {
                alert('Ваш заказ готов!!!')
                dispatch(selectedElementAC(0))
                dispatch(isReadyCloseModal(false))
                localStorage.removeItem('key')
            } else {
                dispatch(selectedElementAC(+localS))
            }
        }
    } else {
        localStorage.removeItem('key')
    }
    dispatch(getOrders(orders))
}