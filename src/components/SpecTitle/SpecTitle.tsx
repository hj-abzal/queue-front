import React from 'react';
import s from './SpecTitle.module.css'


type SpecTitleType = {
    title: string
}

export const SpecTitle = (props: SpecTitleType) => {
    return (
        <div className={s.main}>
            <div className={s.title}>{props.title}</div>
        </div>
    );
};
