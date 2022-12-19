import React from 'react';
import s from './burger-king.module.css'
import {Header} from "../../components/header/header";
import logo from './img/burger-logo.png'
import presentFood from './img/burger-food.png'
import {Table} from "../../components/table/table";
import {SpecTitle} from "../../components/SpecTitle/specTitle";

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
    {id: 'S54', isReady: false},
    {id: 'S54', isReady: false},
]


export const BurgerKing = () => {
    return (
        <div className={s.wrapper}>
            <Header title={'Burger King'} img={logo}/>
            <Table orders={orders} img={presentFood}/>
            <SpecTitle title={'RANDOM TEXT'}/>
        </div>
    );
};

