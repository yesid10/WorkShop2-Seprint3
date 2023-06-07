import React, { useContext, useEffect, useState } from "react";
import "./StylesInicioSesion.scss";
import pizza from '../../assets/Images/PizzaLogo.png'
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { getApiFake } from "../services/fuctionGet";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup'
import Swal from "sweetalert2";
import { searchParamsContext } from "../../Routes/AppRouter";
import { useNavigate } from "react-router-dom";




const InicioSesion = () => {

  const { usuarios, setUsuarios, datos, setDatos, usuario, contrasena } = useContext(searchParamsContext);
  //console.log(usuario, contrasena);


  const validationFuction = usuarios.some(person => person.correo === usuario && person.contraseña === contrasena);
  //console.log(validationFuction);
  const navigate = useNavigate();

  if (validationFuction) {
    navigate("/home")
  } 



  useEffect(() => {
    getApiFake('usuarios')
      .then((response) => {
        if (usuarios.length === 0) {
          setUsuarios(response);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  });

  const formik = useFormik({
    initialValues: {
      usuario: "",
      contrasena: "",
    },
    validationSchema: Yup.object({
      usuario: Yup.string().required(true),
      contrasena: Yup.string().required(true),
    }),
    onSubmit: (formValue, { resetForm }) => {
      if (formValue) {
        setDatos(formValue);
        //console.log(formValue);
        resetForm();
      }

    }
  });

  const handleChange = (event) => {
    event.preventDefault();
    formik.handleChange(event);
  };
  
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
            <Formik>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <FiUser style={{ color: '#fff', position: 'absolute' }} />
                  <input type="text" placeholder="Usuario" name="usuario" value={formik.values.usuario} error={formik.errors.usuario} onChange={handleChange} />
                </div>
                <div>
                  <FiLock style={{ color: '#fff', position: 'absolute' }} />
                  <input type="password" placeholder="Contraseña" name="contrasena" value={formik.values.contrasena} error={formik.errors.contrasena} onChange={handleChange} />
                </div>
                <section>
                  <button type="submit">Iniciar Sesión</button>
                  <p>Restablecer contraseña</p>
                </section>
              </form>
            </Formik>
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

