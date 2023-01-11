import React from 'react';
import s from "../Modal.module.css";
import {Dialog} from "@headlessui/react";
import {OrdersType} from "../../../store/orders-reducer";
import img1 from '../../../assets/menu_BergerKing/big_1628579310.png'
import img2 from '../../../assets/menu_BergerKing/big_1628580583.png'
import img3 from '../../../assets/menu_BergerKing/big_1628579348.png'

type ModalPropsType = {
    children: any
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    orders: OrdersType[]
    onClickHandlerOfSelectedElement: (id: number) => void
    idOfSelectedElement: number
}

export const Modal = (props: ModalPropsType) => {

    const arr = [
        {
            id: 1,
            image: img1,
            title: 'ПАНИНИ С ИНДЕЙКОЙ / ГОВЯДИНОЙ',
            description: 'Мягкие булочки в сочетании с индейкой или говядиной на выбор, также с помидором и листьями салата, заправленные майонезом. Сытный завтрак с бодрящим кофе.',
            price:''
        },
        {
            id: 2,
            image: img2,
            title: 'ВОППЕР®',
            description: 'Фирменный, сытный бургер с овощами, со 100% говядиной, приготовленной на открытом огне',
            price:''
        },
        {
            id: 3,
            image: img3,
            title: 'КРУАССАН С ШОКОЛАДОМ',
            description: 'Французский свежеиспеченный круассан из слоеного теста, с хрустящей корочкой и шоколадной начинкой, в сочетании с ароматным кофе – отличный тандем для легкого завтрака.',
            price:''
        }
    ]

    return (
        <section id='portfolio'>

            <div className={`container ${s.portfolio__container}`}>
                {arr.map(el => {
                    return <article key={el.id} className={s.portfolio__item}>
                        <div className={s.portfolio__item_image}>
                            <img src={el.image} alt=""/>
                        </div>
                        <h3>{el.title}</h3>
                        <div className={s.portfolio__item_cta}>
                            {/*<a href={el.github} className='btn' target='_blank'>GitHub</a>*/}
                            <button></button>
                        </div>
                    </article>
                })
                }
            </div>
        </section>
    );
};
