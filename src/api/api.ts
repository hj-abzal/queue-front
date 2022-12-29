import axios from 'axios'
import {RestaurantType} from "../store/app-reducer";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Header": "Origin, X-Requested-With, Content-Type, Accept"
    }

})
export const restaurantsAPI = {
    getAll: () => instance.get<RestaurantType[]>('restaurants').then(res => res.data)
}