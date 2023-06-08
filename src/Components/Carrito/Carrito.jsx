import React from 'react'
import './StylesCarrito.scss';
import { IoIosArrowBack } from 'react-icons/io';
import {Button, Form } from 'semantic-ui-react';

const Carrito = () => {
  return (
    <>
      <div className='carrito'>
        <div className='carrito__title'>
          <IoIosArrowBack style={{ color: '#b53838', fontWeight: 'bold', fontSize: '1.5rem' }} />
          <p>Carrito de compras</p>
        </div>
        <div>
          <h5>Información de pago</h5>
          <Form>
            {/* <Form.Field> */}
              
              <Form.Input name='nombre' placeholder='Ingresa tu nombre' />
            {/* </Form.Field> */}
            {/* <Form.Field> */}
              
              <Form.Input name='tarjetaCredito' placeholder='1234 1234 1234 1234' />
            {/* </Form.Field> */}
            {/* <Form.Field> */}
              
              <Form.Input name='fechaVencimiento' placeholder='MM/YY' />
              
              <Form.Input name='cvv' />
            {/* </Form.Field> */}
            {/* <Form.Field> */}
              
              <Form.Input name='direccion' placeholder='Av.morelos #123' />
            {/* </Form.Field> */}
            <Form.Button type='submit'>Pagar Ahora</Form.Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Carrito