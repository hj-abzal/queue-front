import {Dispatch} from "redux";
import {ordersAPI} from "../api/api";

type ActionsType =
    | ReturnType<typeof getOrders>
    | ReturnType<typeof selectedElement>
    | ReturnType<typeof isReadyCloseModal>
    | ReturnType<typeof setArrayOfOrdersId>
    | ReturnType<typeof resetSelectedOrders>
export type RestaurantsInitStateType = typeof restaurantOrdersInitState
export type OrdersType = {
    id: number
    is_ready: boolean
    key: string
    restaurant_id: number
    isSelected: boolean
}
export const restaurantOrdersInitState = {
    orders: [] as OrdersType[],
    idOfSelectedElement: 0,
    loader: false,
    isReadyModalOpen: true,
    selectedOrders: [] as OrdersType[]
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
        case "RESET_SELECTED_ORDERS":{
            return {
                ...state,
                selectedOrders: [],
                orders: state.orders.map((el)=>({...el,isSelected:false}))
            }
        }
        case "ELEMENT_IS_SELECTED": {
            const isFind = state.orders.find(el => el.id === action.id)
            if (isFind) {
                const isFindOnSelected = state.selectedOrders.find(el => el.id === isFind.id)
                if (isFindOnSelected) {
                    state.selectedOrders=state.selectedOrders.filter((el) => el.id !== isFindOnSelected.id)
                } else {
                    state.selectedOrders.push(isFind)
                }
            }
            return {
                ...state,
                orders: state.orders.map(el => el.id === action.id ? {...el, isSelected: !action.isSelected} : {...el})
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
export const selectedElement = (id: number, isSelected: boolean) => ({
    type: "ELEMENT_IS_SELECTED" as const, id, isSelected
})
export const resetSelectedOrders = () => ({
    type: "RESET_SELECTED_ORDERS" as const
})
export const getOrders = (orders: OrdersType[]) => ({
    type: "GET_ORDERS" as const, orders, loader: true
})
export const isReadyCloseModal = (isReady: boolean) => ({
    type: "IS_READY_CLOSE_MODAL" as const, isReady
})
export const setArrayOfOrdersId = (id: number) => (
    {type: 'SET_ID_OF_ORDERS' as const, id}
)

//THUNK CREATORS
export const getOrdersTC = (id: number) => async (dispatch: Dispatch) => {
    const orders = await ordersAPI.getAllOrders(id)
    dispatch(getOrders(orders))
}