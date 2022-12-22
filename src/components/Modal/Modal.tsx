import React from 'react';
import s from './Modal.module.css'
import {Dialog} from "@headlessui/react";
import {OrdersType} from "../table/Table";

type ModalPropsType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    orders: OrdersType[]
}

export const Modal = (props: ModalPropsType) => {

    const onClickHandler = () => {}
    
    return (
        <div className={s.modal}>
            <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
                <div className={s.bg}>
                    <Dialog.Panel className={s.popup}>
                        <div className={s.modalHeader}>
                            <Dialog.Title>Выберите ваш заказ</Dialog.Title>
                        </div>
                        <div className={s.modalContent}>
                            {props.orders.map((t, index) => {
                                if (t.isReady) return <button key={index} className={s.modalOrders}
                                                           onClick={onClickHandler}>{t.id}</button>
                            })}
                        </div>
                        <div>
                            <button className={s.buttonClose}
                                    onClick={() => props.setIsOpen(false)}>закрыть
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};
