import React, {useState} from 'react';
import s from './burger-king.module.css'
import {Header} from "../../components/header/header";
import logo from './img/burger-logo.png'
import presentFood from './img/burger-food.png'
import {Table} from "../../components/table/table";
import {SpecTitle} from "../../components/SpecTitle/specTitle";
import {Modal} from "../../components/Modal/Modal";

const orders = [
    {id: 'B23', isReady: true},
    {id: 'L45', isReady: true},
    {id: 'D85', isReady: false},
    {id: 'E61', isReady: true},
    {id: 'R35', isReady: true},
    {id: 'R35', isReady: true},
    {id: 'R35', isReady: true},
    {id: 'V92', isReady: false},
    {id: 'Y77', isReady: false},
    {id: 'S54', isReady: false},
    {id: 'L63', isReady: true},
    {id: 'K24', isReady: false},
    {id: 'H43', isReady: true},
    {id: 'F15', isReady: false},
    {id: 'D47', isReady: false},
    {id: 'U65', isReady: true},
]

export const BurgerKing = () => {
    const [modalState, setModalState] = useState(true)

    return (
        <div className={s.wrapper}>
            <Header title={'Burger King'} img={logo} setActive={setModalState}/>
            <Table orders={orders} img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
            <Modal active={modalState} setActive={setModalState}/>
        </div>
    );
};

