import React from 'react';
import s from './Table.module.css'
import {OrdersType} from "../../store/orders-reducer";

export type TableType = {
    orders: OrdersType[]
    idOfSelectedElement: number
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
                            {props.orders.map((t) => {
                                if (!t.is_ready) return <div key={t.id} className={props.idOfSelectedElement === t.id ? `${s.selectedButton} ${s.true}` : s.true}>{t.key}</div>
                            })}
                        </div>
                        <div className={s.numbersFalse}>
                            {props.orders.map((t) => {
                                if (t.is_ready) return <div key={t.id} className={s.false}>{t.key}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

