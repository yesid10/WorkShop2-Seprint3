import React from "react";
import "./StylesInicioSesion.scss";
import pizza from '../../assets/Images/PizzaLogo.png'
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';


const InicioSesion = () => {
  return (
    <body className="body">
      <div className="body__opacity">
        <header className="body__header">
          <img src={pizza} alt="logo pizza" />
          <p>PiSassScript</p>
        </header>
        <main className="body__main">
          <div>
            <h3>Inicia sesión en tu cuenta</h3>
            <p>
              Disfruta de la mejor Pizza creada para las personas amantes del Código
            </p>
          </div>
          <div>
            <form action="">
              <div>
                <FiUser style={{ color: '#fff', position: 'absolute' }} />
                <input type="text" placeholder="Usuario" />
              </div>
              <div>
                <FiLock style={{ color: '#fff', position: 'absolute' }} />
                <input type="text" placeholder="Contraseña" />
              </div>
              <section>
                <button>Iniciar Sesión</button>
                <p>Restablecer contraseña</p>
              </section>
            </form>
          </div>
        </main>
        <footer>
          <span>¿No tienes una cuenta?</span>
          <p>Regístrate aquí</p>
        </footer>
      </div>

    </body>
  );
};

export default InicioSesion;
