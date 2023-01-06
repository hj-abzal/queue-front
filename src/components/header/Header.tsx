import React from 'react';
import s from "./Header.module.css";


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
                    <div className={s.title}>{props.title}</div>
                </div>
                <div className={s.flex}>
                    <img src={props.clickBtn} className={s.modalButton}
                            onClick={()=>{props.setIsOpen(true)}}>
                    </img>
                </div>
            </div>
        </div>
    );
};
