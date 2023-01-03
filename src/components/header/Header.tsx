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
                <div className={s.flex}>
                    <img src={click} className={s.modalButton}
                            onClick={()=>{props.setIsOpen(true)}}>
                    </img>
                </div>
            </div>
        </div>
    );
};
