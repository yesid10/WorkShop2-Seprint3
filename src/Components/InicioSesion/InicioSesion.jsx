import React, { useContext, useEffect } from "react";
import "./StylesInicioSesion.scss";
import pizza from '../../assets/Images/PizzaLogo.png'
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { getApiFake } from "../services/fuctionGet";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { searchParamsContext } from "../../Routes/AppRouter";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  usuario: Yup.string().email('El correo electrónico no es válido').required('Campo obligatorio'),
  contrasena: Yup.string().required('Campo obligatorio'),
});

const InicioSesion = () => {
  const { usuarios, setUsuarios, setUser } = useContext(searchParamsContext);

  useEffect(() => {
    if (usuarios.length === 0) {
      getApiFake('usuarios')
        .then((response) => {
          setUsuarios(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });


  const navigate = useNavigate();



  const onSubmit = (formValue, { resetForm }) => {
    const validationFuction = usuarios.some(person => person.correo === formValue.usuario && person.contraseña === formValue.contrasena);
    const userInit = usuarios.find(person => person.correo === formValue.usuario && person.contraseña === formValue.contrasena);
    setUser(userInit)
      // console.log(validationFuction);
    // if (Object.entries(formValue).length) {
    resetForm();
    //}
    if (validationFuction) {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success',
      ).then(() => {
        navigate("/home");
      });


    } else {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'error'
      );
    }
    
  };
  

  return (
    <div className="body">
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
            <Formik
              initialValues={{
                usuario: "",
                contrasena: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div>
                  <FiUser style={{ color: '#fff', position: 'absolute' }} />
                  <Field type="text" placeholder="Usuario" name="usuario" />

                </div>
                <ErrorMessage style={{ color: '#fb4444ef', fontSize: '1.1rem', fontFamily: 'Geologica, sans-serif' }} name='usuario' component='div' />
                <div>
                  <FiLock style={{ color: '#fff', position: 'absolute' }} />
                  <Field type="password" placeholder="Contraseña" name="contrasena" />

                </div>
                <ErrorMessage style={{ color: '#fb4444ef', fontSize: '1.1rem', fontFamily: 'Geologica, sans-serif' }} name='contrasena' component='div' />
                <section>
                  <button type="submit">Iniciar Sesión</button>
                  <p>Restablecer contraseña</p>
                </section>
              </Form>
            </Formik>
          </div>
        </main>
        <footer>
          <span>¿No tienes una cuenta?</span>
          <p>Regístrate aquí</p>
        </footer>
      </div>
    </div>
  );
};

export default InicioSesion;

