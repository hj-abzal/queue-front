import React from 'react';
import s from "./header.module.css";


type BurgerLogoType = {
    title: string,
    img: string
}

export const Header = (props: BurgerLogoType) => {
    return (
        <div className={s.main}>
            <div className={s.flex}><img src={props.img} className={s.img}/>
                <div className={s.title}>{props.title}</div>
            </div>
        </div>
    );
};
