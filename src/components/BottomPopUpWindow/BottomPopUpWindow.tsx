import React from 'react';
import s from './BottomPopUpWindow.module.css'

type BottomPopUpWindowPropsType = {
    isOpened: boolean
    children: React.ReactNode
}
export const BottomPopUpWindow = (props: BottomPopUpWindowPropsType) => {
    return (
        <div className={props.isOpened?s.wrapper:s.displayNone}>
            {props.children}
        </div>
    );
};

