import React from 'react';
import s from './Table.module.css'

export type OrdersType = {
    id: string,
    isReady: boolean
}
export type TableType = {
    orders: OrdersType[]
    img: string,
}

export const Table = (props: TableType) => {
    return (
        <div className={s.main}>
            <div className={s.blockTable1}>
                <div className={s.blockTable2}>
                    <div className={s.orders}>
                        <div className={s.notDone}>Готовится</div>
                        <div className={s.done}>Готово</div>
                    </div>
                    <div className={s.table}>
                        <div className={s.numbersTrue}>
                            {props.orders.map((t, index) => {
                                if (!t.isReady) return <div key={index} className={s.true}>{t.id}</div>
                            })}
                        </div>
                        <div className={s.numbersFalse}>
                            {props.orders.map((t, index) => {
                                if (t.isReady) return <div key={index} className={s.false}>{t.id}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.foodMain}><img src={props.img} className={s.food}/></div>
        </div>
    );
};

