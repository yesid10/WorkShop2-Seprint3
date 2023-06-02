import React from "react";
import "./StylesInicioSesion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import pizza from './pizza-slice.png'



const InicioSesion = () => {
  return (
    <main className="main">
      <div className="main__title">
      
      
      <img src={pizza} alt="" className="iconPizza" />
        
        <span>
          <p>PiSassScript</p>
        </span>
      </div>
      <div className="main__cuenta">
        <h2>Inicia sesión en tu cuenta</h2>
        <p>Disfruta de la mejor pizza creada para las personas amantes del código.</p>
      </div>
      <div className="main__registro">
        <h3>
          ¿No tienes una cuenta?
        </h3>
        <h1>
          Registrate aqui
        </h1>
      </div>
    </main>
  );
};

export default InicioSesion;
