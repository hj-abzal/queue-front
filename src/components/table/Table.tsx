import React from 'react';
import s from './Table.module.css'

export type OrdersType = {
    id: string,
    isReady: boolean
}
export type TableType = {
    orders: OrdersType[]
    idOfSelectedElement: string
    clickedElStyle: string
    setClickedElStyle: (id: string) => void
}

export const Table = (props: TableType) => {

    const scrollIntoSelected = (id: string) => {
        setTimeout(() => {
            const selected = document.getElementById(id)
            console.log(selected)
            if (selected) {
                selected.scrollIntoView({behavior: 'smooth'})
            }
        }, 0)
    }

    const isActive = (id: string) => {
        if (props.idOfSelectedElement === id) {
            scrollIntoSelected(id)
            return 'red'
        } else {
            return 'white'
        }
    }

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
                                if (!t.isReady) return <div key={index} className={s.true}><div id={t.id} style={{backgroundColor: isActive(t.id)}}>{t.id}</div></div>
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
        </div>
    );
};

