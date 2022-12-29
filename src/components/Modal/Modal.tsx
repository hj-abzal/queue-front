import React, {useState} from 'react';
import s from './Modal.module.css'
import {Dialog} from "@headlessui/react";
import {OrdersType} from "../table/Table";

type ModalPropsType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    orders: OrdersType[]
    onClickHandlerOfSelectedElement: (id: string) => void
    idOfSelectedElement: string
    clickedElStyle: string
    setClickedElStyle: (id: string) => void
}

export const Modal = (props: ModalPropsType) => {

    const onClickHandler = (id: string) => {
        props.onClickHandlerOfSelectedElement(id)
    }

    const scrollIntoSelected = (id: string) => {
        setTimeout(() => {
            const selected = document.getElementById(id)
            console.log(selected)
            if (selected) {
                selected.scrollIntoView({behavior: 'smooth'})
            }
        }, 0)
    }

    const isActive = (id: string) => {
        if (props.idOfSelectedElement === id) {
            scrollIntoSelected(id)
            return `${s.selectedButton} ${s.modalOrders}`
        } else {
            return s.modalOrders
        }
    }
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
                                if (!t.isReady) return <button id={t.id} key={index}
                                                               className={isActive(t.id)}
                                                               onClick={() => {
                                                                   onClickHandler(t.id);
                                                               }}>{t.id}</button>
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
