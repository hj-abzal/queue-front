import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/header/Header";
import {OrdersType, Table} from "../../components/table/Table";
import presentFood from "../burger-king/img/burger-food.png";
import {SpecTitle} from "../../components/SpecTitle/SpecTitle";
import {Modal} from "../../components/Modal/Modal";
import {AppStateType} from "../../store/store";
import {selectedElementAC} from "../../store/orders-reducer";

type RestaurantPropsType = {
    name: string,
    img: string
}
export const Restaurant = (props: RestaurantPropsType) => {
    const dispatch = useDispatch()
    const orders = useSelector<AppStateType, OrdersType[]>(state => state.orders.orders)
    const idOfSelectedElement = useSelector<AppStateType, string>(state => state.orders.idOfSelectedElement)
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const onClickHandlerOfSelectedElement = (id: string) => {
      dispatch(selectedElementAC(id))
    }
    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} setIsOpen={setIsOpen}/>
            <Table orders={orders}
                   idOfSelectedElement={idOfSelectedElement}
                   img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
            <Modal
                onClickHandlerOfSelectedElement={onClickHandlerOfSelectedElement}
                orders={orders}
                isOpen={isOpen}
                setIsOpen={setIsOpen}/>
        </div>
    );
};

