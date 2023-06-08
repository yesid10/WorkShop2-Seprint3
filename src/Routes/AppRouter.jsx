import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import InicioSesion from '../Components/InicioSesion/InicioSesion'
import DetallePizza from '../Components/DetallePizza/DetallePizza'
import Carrito from '../Components/Carrito/Carrito'
import NotFound from '../Components/NotFound/NotFound'
import Compra from '../Components/Compra/Compra'


export const searchParamsContext = createContext({});

const AppRouter = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [datos, setDatos] = useState({});
    const { usuario, contrasena } = datos;
    return (
        <>
            <BrowserRouter>
                <searchParamsContext.Provider
                    value={
                        {
                            usuarios,
                            setUsuarios,
                            datos,
                            setDatos,
                            usuario,
                            contrasena,
                        }
                    }
                >
                    <Routes>
                        <Route index path='/' element={<InicioSesion />} />
                        <Route path='home' element={<Home />} />
                        <Route path='detallepizza' element={<DetallePizza />} />
                        <Route path='carrito' element={<Carrito />} />
                        <Route path='compra' element={<Compra/>} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </searchParamsContext.Provider>

            </BrowserRouter>
        </>
    )
}

export default AppRouter