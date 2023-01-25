import React from 'react';
import s from "./Header.module.css";


type BurgerLogoType = {
    title: string;
    img: string;
    clickBtn: string;
}

export const Header = (props: BurgerLogoType) => {
    return (
        <div className={s.main}>
            <div className={s.logoBell}>
                <div className={s.flex}>
                    <img src={props.img} className={s.img}/>
                </div>
            </div>
        </div>
    );
};
