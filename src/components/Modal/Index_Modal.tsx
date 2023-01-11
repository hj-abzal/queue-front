import React from 'react';
import s from './Modal.module.css'
import {Dialog} from "@headlessui/react";
import {OrdersType} from "../../store/orders-reducer";

type ModalPropsType = {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    orders?: OrdersType[]
    onClickHandlerOfSelectedElement?: (id: number) => void
    idOfSelectedElement?: number
    modalTitle: string
    bodyText?: string
}

export const Index_Modal = (props: ModalPropsType) => {

    const onClickHandler = (id: number) => {
        props.onClickHandlerOfSelectedElement?.(id)
    }

    const scrollIntoSelected = (id: number) => {
        setTimeout(() => {
            const selected = document.getElementById(id.toString())
            console.log(selected)
            if (selected) {
                selected.scrollIntoView({behavior: 'smooth'})
            }
        })
    }

    const isActive = (id: number) => {
        if (props.idOfSelectedElement === id) {
            scrollIntoSelected(id)
            return `${s.selectedButton} ${s.modalOrders}`
        } else {
            return s.modalOrders
        }
    }

    return (
        <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
            <div className={s.bg}>
                <Dialog.Panel className={s.popup}>
                    <div className={s.modalHeader}>
                        <Dialog.Title>{props.modalTitle}</Dialog.Title>
                    </div>
                    <div className={s.modalContent}>
                        {props.orders?.length ? props.orders?.map((t) => {
                            if (!t.is_ready) return <button id={t.id.toString()} key={t.id}
                                                            className={isActive(t.id)}
                                                            autoFocus={false}
                                                            onClick={() => {
                                                                onClickHandler(t.id);
                                                            }}>{t.key}</button>
                        }) : props.bodyText}
                    </div>
                    <div>
                        <button className={s.buttonClose}
                                onClick={() => props.setIsOpen(false)}>закрыть
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
