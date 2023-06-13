import React from "react";
import "./ProcesandoPedido.scss";
import Gif from "../../assets/Images/animation_500_litmh0h8.gif";
import { useNavigate } from "react-router-dom";


const ProcesandoPedido = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault(); 
        navigate("/Home");
      };
  return (
    <>
      <form onSubmit={onSubmit} className="contenedor__procesado">
        <div>
          <img src={Gif} alt="" className="prueba" />
        </div>

        <p className="titulo__procesado">Tú pedido esta en proceso</p>
        <p className="subtitulo">
          Seras notificado cuando llegue el repartidor
        </p>
        <button type="submit" className="boton__procesado">
          Aceptar
        </button>
      </form>
    </>
  );
};

export default ProcesandoPedido;