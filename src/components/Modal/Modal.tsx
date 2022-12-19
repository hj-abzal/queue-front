import React from 'react';
import s from './Modal.module.css'

type ModalPropsType = {
    active: any
    setActive: (value: any) => void
}


export const Modal = (props: ModalPropsType) => {

    const modalHandler = () => {
        props.setActive(false)
    }
    return (
        <div className={s.modal}
             onClick={modalHandler}>
            <div className={props.active ? "s.modal_content.active" : "s.modal_content"}
                 onClick={event => event.stopPropagation()}>
            </div>
        </div>
    );
};
