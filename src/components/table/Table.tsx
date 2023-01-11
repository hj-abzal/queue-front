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
            <table>
                <tr className={s.flex}>
                    <th className={s.check}>Готовится</th>
                    <th className={s.check}>Готово</th>
                </tr>
                <tr className={s.flex}>
                    <td className={s.numbersTrue_scroll}>
                        {props.orders.map((t) => {
                        if (!t.is_ready) return <td key={t.id}
                                                    className={props.idOfSelectedElement === t.id ? `${s.selectedButton} ${s.true}` : s.true}>{t.key}</td>
                    })}
                    </td>
                    <td className={s.numbersFalse_scroll}>
                        {props.orders.map((t) => {
                            if (t.is_ready) return <td key={t.id}
                                                        className={props.idOfSelectedElement === t.id ? `${s.selectedButton} ${s.true}` : s.true}>{t.key}</td>
                        })}
                    </td>
                </tr>
            </table>
        </div>
    );
};

