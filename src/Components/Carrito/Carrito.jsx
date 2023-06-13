import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './StylesCarrito.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { Button, Form } from 'semantic-ui-react';
import { searchParamsContext } from '../../Routes/AppRouter';
import { Link, useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { pizza, count, precioFinal } = useContext(searchParamsContext);
  console.log(pizza);

  const initialValues = {
    nombre: '',
    tarjetaCredito: '',
    fechaVencimiento: '',
    cvv: '',
    direccion: ''
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Ingresa tu nombre'),
    tarjetaCredito: Yup.string().required('Ingresa el número de tarjeta de crédito'),
    fechaVencimiento: Yup.date().required('Ingresa la fecha de vencimiento').nullable(),
    cvv: Yup.string().required('Ingresa el CVV'),
    direccion: Yup.string().required('Ingresa tu dirección')
  });
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
    if(values){
      navigate('/procesandoPedido')
    }
  };
  

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <>
      <div className='carrito'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/detallepizza'>
          <div className='carrito__title'>
            <IoIosArrowBack style={{ color: '#b53838', fontWeight: 'bold', fontSize: '1.5rem' }} />
            <p>Carrito de compras</p>
          </div>
        </Link>

        <div className='carrito__infoPizza'>
          <figure>
            <img src={pizza.image1} alt='' />
          </figure>
          <div className='carrito__namePizza'>
            <p>{pizza.nombre}</p>
            <div>
              <span>x{count}</span>
              <span>${precioFinal}</span>
            </div>
          </div>
        </div>
        <div className='carrito__formulario'>
          <h5>Información de pago</h5>
          <Form onSubmit={formik.handleSubmit}>
            <label>Nombre Completo</label>
            <input name='nombre' placeholder='Ingresa tu nombre' {...formik.getFieldProps('nombre')} />
            {formik.touched.nombre && formik.errors.nombre && <div className='error'>{formik.errors.nombre}</div>}

            <label>Numero de tarjeta de crédito</label>
            <input name='tarjetaCredito' placeholder='1234 1234 1234 1234' {...formik.getFieldProps('tarjetaCredito')} />
            {formik.touched.tarjetaCredito && formik.errors.tarjetaCredito && (
              <div className='error'>{formik.errors.tarjetaCredito}</div>
            )}

            <div className='carrito__cvv'>
              <div>
                <label>Fecha de vencimiento</label>
                <input
                  type='date'
                  name='fechaVencimiento'
                  placeholder='MM/YY'
                  {...formik.getFieldProps('fechaVencimiento')}
                />
                {formik.touched.fechaVencimiento && formik.errors.fechaVencimiento && (
                  <div className='error'>{formik.errors.fechaVencimiento}</div>
                )}
              </div>
              <div>
                <label>CVV</label>
                <input name='cvv' {...formik.getFieldProps('cvv')} />
                {formik.touched.cvv && formik.errors.cvv && <div className='error'>{formik.errors.cvv}</div>}
              </div>
            </div>

            <label>Dirección</label>
            <input name='direccion' placeholder='Av.morelos #123' {...formik.getFieldProps('direccion')} />
            {formik.touched.direccion && formik.errors.direccion && <div className='error'>{formik.errors.direccion}</div>}

            <button type='submit'>Pagar Ahora</button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Carrito;
