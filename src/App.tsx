import s from './App.module.css'
import {Route, Routes} from "react-router-dom";
import {BurgerKing} from "./pages/burger-king/burger-king";

export const App = () => {

    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<div>HomePage</div>}/>
                <Route path={'/burger-king'} element={<BurgerKing/>}/>
            </Routes>
        </div>
    )
}

// каждый элемент айдишник имеет и ключ исреади если это тру готово и число

