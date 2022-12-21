import React, {useState} from 'react';
import s from './Burger-king.module.css'
import {Header} from "../../components/header/Header";
import logo from './img/burger-logo.png'
import presentFood from './img/burger-food.png'
import {Table} from "../../components/table/Table";
import {SpecTitle} from "../../components/SpecTitle/SpecTitle";
import {Modal} from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";



export const BurgerKing = () => {
    const dispatch = useDispatch()
    const orders = useSelector<AppRootStateType, any>(state => state.orders)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={s.wrapper}>
            <Header title={'Burger King'} img={logo} setIsOpen={setIsOpen}/>
            <Table orders={orders} img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
            <Modal orders={orders}  isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    );
};

