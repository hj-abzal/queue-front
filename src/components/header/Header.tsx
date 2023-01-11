import React from 'react';
import s from "./Header.module.css";
import click from './../../assets/img/click.png'

type BurgerLogoType = {
    title: string,
    img: string,
    setIsOpen: (value: any) => void
}

export const Header = (props: BurgerLogoType) => {
    return (
        <div className={s.main}>
            <div className={s.logoBell}>
                <div className={s.flex}>
                    <img src={props.img} className={s.img}/>
                    <div className={s.title}>{props.title}</div>
                </div>
                <button onClick={()=>{props.setIsOpen(true)}} className={s.button}>Выбрать заказ</button>
            </div>
        </div>
    );
};
