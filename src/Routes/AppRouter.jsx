import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import InicioSesion from "../Components/InicioSesion/InicioSesion";
import DetallePizza from "../Components/DetallePizza/DetallePizza";
import Carrito from "../Components/Carrito/Carrito";
import NotFound from "../Components/NotFound/NotFound";

export const searchParamsContext = createContext({});

const AppRouter = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState({});
  const [pizza, setpizza] = useState([]);
  const [count, setCount] = useState(1);

  return (
    <>
      <BrowserRouter>
        <searchParamsContext.Provider
          value={{
            usuarios,
            setUsuarios,
            user,
            setUser,
            pizza,
            setpizza,
            count, 
            setCount
          }}
        >
          <Routes>
            <Route index path="/" element={<InicioSesion />} />
            <Route path="home" element={<Home />} />
            <Route path="detallepizza/:name" element={<DetallePizza />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="compra" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </searchParamsContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
