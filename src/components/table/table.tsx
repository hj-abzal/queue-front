import React from 'react';
import s from './table.module.css'

export type OrdersType = {
    id: string,
    isReady: boolean
}

type TableType = {
    orders: OrdersType[]
    img: string,
}

export const Table = (props: TableType) => {
    return (
        <div className={s.main}>
            <div className={s.orders}>
                <div className={s.notDone}>Готовится</div>
                <div className={s.done}>Готово</div>
            </div>
            <div className={s.table}>
                <div className={s.numbersTrue}>
                    {props.orders.map((t) => {
                        if (!t.isReady) return <div className={s.true}>{t.id}</div>
                    })}
                </div>
                <div className={s.numbersFalse}>
                    {props.orders.map((t) => {
                        if (t.isReady) return <div className={s.false}>{t.id}</div>
                    })}
                </div>
            </div>
            <div className={s.foodMain}><img src={props.img} className={s.food}/></div>
        </div>
    );
};

