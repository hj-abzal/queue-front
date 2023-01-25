import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/Header/Header";
import {Table} from "../../components/Table/Table";
import {AppStateType} from "../../store/store";
import {getOrdersTC, OrdersType, resetSelectedOrders} from "../../store/orders-reducer";
import {Advertisement} from "../../components/SpecTitle/Advertisement";
import ph1 from '../../assets/img/test1.jpg';
import ph2 from '../../assets/img/test2.jpg';
import ph3 from '../../assets/img/test3.jpg';
import click from '../../assets/img/bell.png'
import {BottomPopUpWindow} from "../../components/BottomPopUpWindow/BottomPopUpWindow";
import {useNavigate} from "react-router-dom";


type RestaurantPropsType = {
    name: string,
    img: string
    id: number
    url:string
}
export const Restaurant = (props: RestaurantPropsType) => {
    localStorage.clear()
    const dispatch = useDispatch<any>()
    const orders = useSelector<AppStateType, OrdersType[]>(state => state.orders.orders)
    const idOfSelectedElement = useSelector<AppStateType, number>(state => state.orders.idOfSelectedElement)
    const loader = useSelector<AppStateType, boolean>(state => state.orders.loader)
    const selectedOrders = useSelector<AppStateType,OrdersType[]>(state => state.orders.selectedOrders)
    const navigate = useNavigate()
    console.log(props.url)
    const img = [
        {id: '1', img: ph1},
        {id: '2', img: ph2},
        {id: '3', img: ph3},
    ]
    const onConfirmHandler = () =>{
        localStorage.setItem('orders',JSON.stringify(selectedOrders.map(el=>el.id)))
        dispatch(resetSelectedOrders())
        navigate('orders')
    }

    useEffect(() => {
        dispatch(getOrdersTC(props.id))
    }, [])

    useEffect(() => {
        let interval: any;
        if (interval) {
            clearInterval(interval);
        }
        if (idOfSelectedElement) {
            interval = setInterval(() => {
                dispatch(getOrdersTC(props.id))
            }, 3000)
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [idOfSelectedElement])

    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} clickBtn={click}/>
            <Table orders={orders}
                   loader={loader}/>
            <Advertisement img={img}/>
            <BottomPopUpWindow isOpened={selectedOrders.length > 0}>
                <div>Выбрано заказов: {selectedOrders.length}</div>
                <button className={s.confirm} onClick={onConfirmHandler}>Подтвердить</button></BottomPopUpWindow>
        </div>
    );
};

