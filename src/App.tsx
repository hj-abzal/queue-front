import s from './App.module.css'
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Restaurant} from "./pages/RestorauntComponent/Restaurant";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {RestaurantType} from "./store/app-reducer";
import {translitRuEn} from "./helpers/transliteration";

export const App = () => {
    const restaurants = useSelector<AppRootStateType,RestaurantType[]>(state=> state.restaurants)
    console.log(translitRuEn("Маши Со"))
    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<div>HomePage</div>}/>
                {/*<Route path={'/burger-king'} element={<BurgerKing/>}/>*/}

                {restaurants.map((r)=>{
                   return( <Route path={translitRuEn(r.name)} element={<Restaurant key={r.id}img={r.name} name={r.name}/>}/>)
                })}
            </Routes>
        </div>
    )
}

