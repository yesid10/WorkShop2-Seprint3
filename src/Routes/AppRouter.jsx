import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import InicioSesion from '../Components/InicioSesion/InicioSesion'
import DetallePizza from '../Components/DetallePizza/DetallePizza'
import Carrito from '../Components/Carrito/Carrito'
import NotFound from '../Components/NotFound/NotFound'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<InicioSesion/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='detallepizza'  element={<DetallePizza/>}/>
                    <Route path='carrito' element={<Carrito/>}/>
                    <Route path='compra' element={<Carrito/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter