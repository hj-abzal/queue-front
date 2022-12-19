import React from 'react';
import s from './specTitle.module.css'


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
