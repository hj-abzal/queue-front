import React from 'react';
import s from "./Header.module.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';

type BurgerLogoType = {
    title: string;
    img: string;
    clickBtn: string;
    setIsOpen: (value: any) => void;
}

export const Header = (props: BurgerLogoType) => {
    return (
        <div className={s.main}>
            <div className={s.logoBell}>
                <div className={s.flex}>
                    <img src={props.img} className={s.img}/>
                </div>
                <div className={s.shop}>
                    {/*<button onClick={()=>{props.setIsOpen(true)}} className={s.button}>Выбрать заказ</button>*/}
                    <AiOutlineShoppingCart className={s.icon} onClick={()=>{props.setIsOpen(true)}}/>
                </div>
            </div>
        </div>
    );
};
