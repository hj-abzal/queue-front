//TYPES
import {Dispatch} from "redux";
import {restaurantsAPI} from "../api/api";

export type RestaurantType = {
    id:number,
    title: string,
    img:string,
    url: string
}

type InitStateType = typeof initState;
const initState = {
    isLoading: false,
    restaurants: [] as RestaurantType[]
}

type ActionsType =
    | ReturnType<typeof setRestaurants>

//LOGIC
export const appReducer = (state: InitStateType = initState, action: ActionsType)=>{
    switch (action.type) {
        case 'SET_RESTAURANTS': {
            return {
                ...state,
                restaurants: action.restaurants
            }
        }
        default:{
            return state
        }
    }
}

//ACTION CREATORS
export const setRestaurants = (restaurants: RestaurantType[]) => ({
    type: "SET_RESTAURANTS" as const, restaurants
})

export const setIsLoading = (value: boolean) => ({
    type: "SET_RESTAURANTS" as const, value
})

//THUNK CREATORS
export const getRestaurants = () => async (dispatch: Dispatch) => {
    // dispatch(setIsLoading(true));
    const restaurants = await restaurantsAPI.getAll();
    dispatch(setRestaurants(restaurants))
    // dispatch(setIsLoading(false));
}