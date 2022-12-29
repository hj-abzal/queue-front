import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import {Slide} from "react-slideshow-image";
import s from './Advertisement.module.css'

export type imagesType = {
    id: string,
    img: string
}

type AdvertisementType = {
    img: imagesType[]
}


export const Advertisement = (props: AdvertisementType) => {
    return (
        <div className={s.slider}>
            <Slide infinite={true} cssClass={`slider-styles`}>
                {props.img.map((t) => <div className={s.main}><img src={t.img} className={s.img}/></div>)}
            </Slide>
        </div>
    );
};
