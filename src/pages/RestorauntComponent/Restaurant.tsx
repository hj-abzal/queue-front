import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/header/Header";
import {Table} from "../../components/table/Table";
import {Modal} from "../../components/Modal/Modal";
import {AppStateType} from "../../store/store";
import {getOrdersTC, OrdersType, selectedElementAC} from "../../store/orders-reducer";
import {Advertisement} from "../../components/SpecTitle/Advertisement";
import ph1 from '../../assets/img/test1.jpg';
import ph2 from '../../assets/img/test2.jpg';
import ph3 from '../../assets/img/test3.jpg';

type RestaurantPropsType = {
    name: string,
    img: string
    id: number
}
export const Restaurant = (props: RestaurantPropsType) => {
    const dispatch = useDispatch<any>()
    const orders = useSelector<AppStateType, OrdersType[]>(state => state.orders.orders)
    const idOfSelectedElement = useSelector<AppStateType, number>(state => state.orders.idOfSelectedElement)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const img = [
        {id: '1', img: ph1},
        {id: '2', img: ph2},
        {id: '3', img: ph3},
    ]

    const onClickHandlerOfSelectedElement = (id: number) => {
      dispatch(selectedElementAC(id))
    }
    useEffect(() => {
        const setInt = setInterval(() => {
            dispatch(getOrdersTC(props.id))
        }, 60000)
        return () => {
            clearInterval(setInt)
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} setIsOpen={setIsOpen}/>
            <Table orders={orders}
                   idOfSelectedElement={idOfSelectedElement}/>
            <Advertisement img={img}/>
            <Modal
                onClickHandlerOfSelectedElement={onClickHandlerOfSelectedElement}
                idOfSelectedElement={idOfSelectedElement}
                orders={orders}
                isOpen={isOpen}
                setIsOpen={setIsOpen}/>
        </div>
    );
};

