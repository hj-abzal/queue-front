type OrdersActionType = {
    type: "ORDERED"
}
type IdOfSelectedElementActionType = {
    type: "ELEMENT_IS_SELECTED"
    id: string
}
type ActionsType = OrdersActionType | IdOfSelectedElementActionType
export type RestautrantsInitStateType = typeof restaurantOrdersInitialState
export const restaurantOrdersInitialState = {
    orders: [
        {id: 'B23', isReady: true},
        {id: 'L45', isReady: true},
        {id: 'D85', isReady: false},
        {id: 'E61', isReady: true},
        {id: 'R35', isReady: true},
        {id: 'R35', isReady: true},
        {id: 'R35', isReady: true},
        {id: 'V92', isReady: false},
        {id: 'Y77', isReady: false},
        {id: 'S54', isReady: false},
        {id: 'L63', isReady: true},
        {id: 'K24', isReady: false},
        {id: 'H43', isReady: true},
        {id: 'F15', isReady: true},
        {id: 'D47', isReady: false},
        {id: 'U65', isReady: true},
        {id: 'U59', isReady: false},
        {id: 'H24', isReady: false},
        {id: 'L78', isReady: true},
        {id: 'Q93', isReady: true},
        {id: 'K65', isReady: false},
        {id: 'D63', isReady: false},
        {id: 'Z29', isReady: true},
    ],
    name: 'Burger King',
    idOfSelectedElement: ''
}

export const ordersReducer = (state = restaurantOrdersInitialState, action: ActionsType) => {
    switch (action.type) {
        case "ORDERED": {
            return {...state};
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

export const ordersAC = (): OrdersActionType => {
    return {type: "ORDERED"}
}
export const selectedElementAC = (id: string) => {
    return {type: "ELEMENT_IS_SELECTED", id}
}
