import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/header/Header";
import {Table} from "../../components/table/Table";
import presentFood from "../burger-king/img/burger-food.png";
import {SpecTitle} from "../../components/SpecTitle/SpecTitle";
import {Modal} from "../../components/Modal/Modal";
import {AppRootStateType} from "../../store/store";

type RestaurantPropsType = {
    name: string,
    img: string
}
export const Restaurant = (props: RestaurantPropsType) => {
    const dispatch = useDispatch()
    const restaurantOrders = useSelector<AppRootStateType, any>(state => state.restaurantOrders)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    // useEffect(() => {
    //     dispatch(ordersAC())
    // })


    // fdfdfdgdfgdfgerger

    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} setIsOpen={setIsOpen}/>
            <Table orders={restaurantOrders.orders} img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
            <Modal orders={restaurantOrders.orders} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

