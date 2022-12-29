import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "./Restaurant.module.css";
import {Header} from "../../components/header/Header";
import {OrdersType, Table} from "../../components/table/Table";
import {Modal} from "../../components/Modal/Modal";
import {AppStateType} from "../../store/store";
import {selectedElementAC} from "../../store/orders-reducer";
import {Advertisement} from "../../components/SpecTitle/Advertisement";
import ph1 from '../../assets/img/test1.jpg';
import ph2 from '../../assets/img/test2.jpg';
import ph3 from '../../assets/img/test3.jpg';

type RestaurantPropsType = {
    name: string,
    img: string
}
export const Restaurant = (props: RestaurantPropsType) => {
    const dispatch = useDispatch()
    const orders = useSelector<AppStateType, OrdersType[]>(state => state.orders.orders)
    const idOfSelectedElement = useSelector<AppStateType, string>(state => state.orders.idOfSelectedElement)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [clickedElStyle, setClickedElStyle] = useState('')
    const img = [
        {id: '1', img: ph1},
        {id: '2', img: ph2},
        {id: '3', img: ph3},
    ]

    const onClickHandlerOfSelectedElement = (id: string) => {
      dispatch(selectedElementAC(id))
    }

    return (
        <div className={s.wrapper}>
            <Header title={props.name} img={props.img} setIsOpen={setIsOpen}/>
            <Table orders={orders}
                   clickedElStyle={clickedElStyle}
                   setClickedElStyle={setClickedElStyle}
                   idOfSelectedElement={idOfSelectedElement}/>
            <Advertisement img={img}/>
            <Modal
                clickedElStyle={clickedElStyle}
                setClickedElStyle={setClickedElStyle}
                onClickHandlerOfSelectedElement={onClickHandlerOfSelectedElement}
                idOfSelectedElement={idOfSelectedElement}
                orders={orders}
                isOpen={isOpen}
                setIsOpen={setIsOpen}/>
        </div>
    );
};

