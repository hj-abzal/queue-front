import React from 'react';
import s from './Table.module.css'
import {OrdersType} from "../../store/orders-reducer";


export type TableType = {
    orders: OrdersType[]
    idOfSelectedElement: number
    loader: boolean
}

export const Table = (props: TableType) => {
    return (
        <div className={s.main}>
            <div className={s.table}>
                <div>
                    <div className={s.check}>Готовится</div>
                    <div className={s.numbersTrue_scroll}>
                        {props.orders.map((t) => {
                            if (!t.is_ready) return <td key={t.id}
                                                        className={props.idOfSelectedElement === t.id ? `${s.selectedButton} ${s.true}` : s.true}>{t.key}</td>
                        })}
                    </div>
                </div>
                <div>
                    <div className={s.check}>Готово</div>
                    <div className={s.numbersFalse_scroll}>
                        {props.orders.map((t) => {
                            if (t.is_ready) return <td key={t.id}
                                                       className={props.idOfSelectedElement === t.id ? `${s.selectedButton} ${s.true}` : s.true}>{t.key}</td>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
