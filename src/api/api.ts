import axios from 'axios'
import {RestaurantType} from "../store/app-reducer";
import {OrdersType} from "../store/orders-reducer";

type ResponseOrdersType = {
    id: number
    img: string
    title: string
    url: string
    orders: OrdersType[]
}

const instance = axios.create({
    baseURL: 'https://queue.up.railway.app/api/',
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Header": "Origin, X-Requested-With, Content-Type, Accept"
    }
})
export const restaurantsAPI = {
    getAll: () => instance.get<RestaurantType[]>('restaurants').then(res => res.data)
}

export const ordersAPI = {
    getAllOrders: (id: number) => instance.get<ResponseOrdersType>(`restaurants/${id}/orders`).then(res => res.data.orders)
}