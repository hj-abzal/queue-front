import s from './App.module.css'
import {Link, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {Restaurant} from "./pages/RestorauntComponent/Restaurant";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants, RestaurantType} from "./store/app-reducer";
import {AppStateType} from "./store/store";

export const App = () => {
    const restaurants = useSelector<AppStateType, RestaurantType[]>(state => state.app.restaurants);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<div>
                    {restaurants.map((r) => {
                        return <div><Link to={r.url}>{r.title}</Link></div>
                    })}
                    home
                </div>}/>

                {restaurants.map((r) => {
                    return (<Route path={r.url} element={<Restaurant key={r.id} img={r.img} name={r.title}/>}/>)
                })}
            </Routes>
        </div>
    )
}



