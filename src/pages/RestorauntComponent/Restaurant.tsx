import React, {useState} from 'react';
import {useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/header/Header";
import {OrdersType, Table} from "../../components/table/Table";
import presentFood from "../burger-king/img/burger-food.png";
import {SpecTitle} from "../../components/SpecTitle/SpecTitle";
import {Modal} from "../../components/Modal/Modal";
import {AppStateType} from "../../store/store";

type RestaurantPropsType = {
    name: string,
    img: string
}
export const Restaurant = (props: RestaurantPropsType) => {
    const orders = useSelector<AppStateType, OrdersType[]>(state => state.orders.orders)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} setIsOpen={setIsOpen}/>
            <Table orders={orders} img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
            <Modal orders={orders} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

