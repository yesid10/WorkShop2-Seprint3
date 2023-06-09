import React, { useContext } from 'react'
import { searchParamsContext } from '../../Routes/AppRouter';
import  './DetallePizza.scss'

const DetallePizza = () => {
  const { pizza } = useContext(searchParamsContext);
  console.log(pizza)


  return(

    <div className='detallePizza'>
      <div className='detallePizza__info'>
        <div className='detallePizza__title'>
          Todas las pizzas
        </div>
        <div className='detallePizza__img'>
        <img src={pizza.image} alt="" className='detallePizza__img'/>
        </div>
        <h3>{pizza.nombre}</h3>
        <button>{pizza.precio}</button>
        <button></button>
        <h5>Descripción</h5>
        <p>{pizza.descripcion}</p>
      </div>
    </div>
  )
  
}

export default DetallePizza